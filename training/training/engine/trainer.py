import csv
import torch
from tqdm import tqdm

from training.configs.training_config import (
    DEVICE,
    CHECKPOINT_DIR,
    LOG_DIR,
)

from training.utils.metrics import calculate_metrics


class Trainer:

    def __init__(
        self,
        model,
        train_loader,
        val_loader,
        criterion,
        optimizer,
    ):

        self.device = DEVICE

        self.model = model.to(self.device)

        self.train_loader = train_loader
        self.val_loader = val_loader

        self.criterion = criterion
        self.optimizer = optimizer

        self.best_accuracy = 0.0
        self.checkpoint_dir = CHECKPOINT_DIR

        self.history = []

        print(f"Using device: {self.device}")

    # ---------------------------------------------------
    # Training
    # ---------------------------------------------------

    def train_one_epoch(self):

        self.model.train()

        running_loss = 0.0

        progress_bar = tqdm(
            self.train_loader,
            desc="Training",
            leave=False,
        )

        for images, labels in progress_bar:

            images = images.to(self.device)
            labels = labels.to(self.device)

            self.optimizer.zero_grad()

            outputs = self.model(images)

            loss = self.criterion(outputs, labels)

            loss.backward()

            self.optimizer.step()

            running_loss += loss.item()

            progress_bar.set_postfix(
                {
                    "loss": f"{loss.item():.4f}"
                }
            )

        epoch_loss = running_loss / len(self.train_loader)

        return epoch_loss

    # ---------------------------------------------------
    # Validation
    # ---------------------------------------------------

    def validate(self):

        self.model.eval()

        running_loss = 0.0

        predictions = []
        labels_list = []

        with torch.no_grad():

            for images, labels in self.val_loader:

                images = images.to(self.device)
                labels = labels.to(self.device)

                outputs = self.model(images)

                loss = self.criterion(outputs, labels)

                running_loss += loss.item()

                preds = outputs.argmax(dim=1)

                predictions.extend(preds.cpu().numpy())

                labels_list.extend(labels.cpu().numpy())

        val_loss = running_loss / len(self.val_loader)

        metrics = calculate_metrics(
            labels_list,
            predictions,
        )

        return val_loss, metrics

    # ---------------------------------------------------
    # Save Checkpoint
    # ---------------------------------------------------

    def save_checkpoint(self, epoch, accuracy):

        checkpoint = {
            "epoch": epoch,
            "best_accuracy": self.best_accuracy,
            "model_state_dict": self.model.state_dict(),
            "optimizer_state_dict": self.optimizer.state_dict(),
        }

        latest_path = self.checkpoint_dir / "latest_checkpoint.pth"

        torch.save(checkpoint, latest_path)

        if accuracy > self.best_accuracy:

            self.best_accuracy = accuracy

            checkpoint["best_accuracy"] = accuracy

            best_path = self.checkpoint_dir / "best_model.pth"

            torch.save(checkpoint, best_path)

            print("\n✅ New best model saved!")

        else:

            print("\nModel did not improve.")

    # ---------------------------------------------------
    # Load Checkpoint
    # ---------------------------------------------------

    def load_checkpoint(self):

        checkpoint_path = self.checkpoint_dir / "best_model.pth"

        if not checkpoint_path.exists():

            print("No checkpoint found. Starting fresh training.")

            return 0

        checkpoint = torch.load(
            checkpoint_path,
            map_location=self.device,
        )

        self.model.load_state_dict(
            checkpoint["model_state_dict"]
        )

        self.optimizer.load_state_dict(
            checkpoint["optimizer_state_dict"]
        )

        self.best_accuracy = checkpoint["best_accuracy"]

        start_epoch = checkpoint["epoch"] + 1

        print("\n" + "=" * 60)
        print("Checkpoint loaded successfully!")
        print(f"Resuming from Epoch: {start_epoch}")
        print(f"Best Accuracy: {self.best_accuracy:.4f}")
        print("=" * 60)

        return start_epoch

    # ---------------------------------------------------
    # Save Training History
    # ---------------------------------------------------

    def save_history(self):

        history_file = LOG_DIR / "training_history.csv"

        with open(history_file, "w", newline="") as csvfile:

            writer = csv.DictWriter(
                csvfile,
                fieldnames=[
                    "epoch",
                    "train_loss",
                    "val_loss",
                    "accuracy",
                    "precision",
                    "recall",
                    "f1",
                ],
            )

            writer.writeheader()

            writer.writerows(self.history)

        print(f"\nTraining history saved to:\n{history_file}")

    # ---------------------------------------------------
    # Training Loop
    # ---------------------------------------------------

    def fit(self, epochs):

        start_epoch = self.load_checkpoint()

        for epoch in range(start_epoch, epochs):

            print(f"\nEpoch {epoch + 1}/{epochs}")

            train_loss = self.train_one_epoch()

            val_loss, metrics = self.validate()

            print(f"Training Loss: {train_loss:.4f}")
            print(f"Validation Loss: {val_loss:.4f}")
            print(f"Accuracy : {metrics['accuracy']:.4f}")
            print(f"Precision: {metrics['precision']:.4f}")
            print(f"Recall   : {metrics['recall']:.4f}")
            print(f"F1 Score : {metrics['f1']:.4f}")

            self.history.append(
                {
                    "epoch": epoch + 1,
                    "train_loss": train_loss,
                    "val_loss": val_loss,
                    "accuracy": metrics["accuracy"],
                    "precision": metrics["precision"],
                    "recall": metrics["recall"],
                    "f1": metrics["f1"],
                }
            )

            self.save_checkpoint(
                epoch,
                metrics["accuracy"],
            )

        self.save_history()