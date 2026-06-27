import torch
import os
from tqdm import tqdm
from training.configs.training_config import (
    DEVICE,
    CHECKPOINT_DIR,
)

from training.utils.metrics import calculate_metrics

from training.configs.training_config import DEVICE


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
    
    def save_checkpoint(self, accuracy):

        if accuracy > self.best_accuracy:

         self.best_accuracy = accuracy

         save_path = CHECKPOINT_DIR / "best_model.pth"
         

         torch.save(
            self.model.state_dict(),
            save_path
         )

         print("\n✅ New best model saved!")

        else:

         print("\nModel did not improve.")
    
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
        for epoch in range(epochs):
            print(f"Epoch {epoch + 1}/{epochs}")

            train_loss = self.train_one_epoch()

            val_loss, metrics = self.validate()

            
            print(f"Training Loss: {train_loss:.4f} ")
            print(f"Validation Loss: {val_loss:.4f} ")
            print(f"Accuracy : {metrics['accuracy']:.4f}")
            print(f"Precision: {metrics['precision']:.4f}")
            print(f"Recall   : {metrics['recall']:.4f}")
            print(f"F1 Score : {metrics['f1']:.4f}")
            self.save_checkpoint(metrics["accuracy"])
                 