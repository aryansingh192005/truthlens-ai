import torch
import os
from tqdm import tqdm
from training.configs.training_config import (
    DEVICE,
    CHECKPOINT_DIR,
)

from training.utils.metrics import calculate_metrics

from training.configs.training_config import DEVICE
from pathlib import Path

from training.configs.training_config import (
    DEVICE,
    LOCAL_CHECKPOINT_DIR,
    GOOGLE_DRIVE_CHECKPOINT_DIR,
)

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

        print(f"Using device: {self.device}")
        self.best_accuracy = 0.0
        if GOOGLE_DRIVE_CHECKPOINT_DIR.exists():
          self.checkpoint_dir = GOOGLE_DRIVE_CHECKPOINT_DIR
        else:
          self.checkpoint_dir = LOCAL_CHECKPOINT_DIR
    
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
        predictions
       )
        return val_loss, metrics
    
    def save_checkpoint(self, epoch, accuracy):

      if accuracy <= self.best_accuracy:
        print("\nModel did not improve.")
        return

      self.best_accuracy = accuracy

      checkpoint = {
        "epoch": epoch,
        "best_accuracy": accuracy,
        "model_state_dict": self.model.state_dict(),
        "optimizer_state_dict": self.optimizer.state_dict(),
       }

      checkpoint_path = self.checkpoint_dir / "best_model.pth"

      torch.save(checkpoint, checkpoint_path)

      print(f"\n✅ Best model saved to:\n{checkpoint_path}")

    def load_checkpoint(self):
       checkpoint_path = self.checkpoint_dir / "best_model.pth"
       if not checkpoint_path.exists():
          print("No checkpoint found. Starting fresh training.")
          return 0
       checkpoint = torch.load(
        checkpoint_path,
        map_location=self.device
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
    
    def train_one_epoch(self):
        self.model.train()

        running_loss = 0.0

        progress_bar = tqdm(
        self.train_loader,
        desc="Training",
        leave=False
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

            progress_bar.set_postfix({
            "loss": f"{loss.item():.4f}"
        })

            
        epoch_loss = running_loss / len(self.train_loader)
        return epoch_loss
    
    def fit(self, epochs):
        start_epoch = self.load_checkpoint()
        for epoch in range(start_epoch, epochs):
            print(f"\nEpoch {epoch + 1}/{epochs}")

            train_loss = self.train_one_epoch()

            val_loss, metrics = self.validate()

            
            print(f"Training Loss: {train_loss:.4f} ")
            print(f"Validation Loss: {val_loss:.4f} ")
            print(f"Accuracy : {metrics['accuracy']:.4f}")
            print(f"Precision: {metrics['precision']:.4f}")
            print(f"Recall   : {metrics['recall']:.4f}")
            print(f"F1 Score : {metrics['f1']:.4f}")
            self.save_checkpoint(
                epoch,
                metrics["accuracy"]
          )
                 