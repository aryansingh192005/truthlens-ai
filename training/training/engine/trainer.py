import torch

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
    
    def train_one_epoch(self):
        self.model.train()

        running_loss = 0.0

        for batch_idx, (images, labels) in enumerate(self.train_loader):
            images = images.to(self.device)
            labels = labels.to(self.device)
            self.optimizer.zero_grad()
            outputs = self.model(images)

            loss = self.criterion(outputs, labels)

            loss.backward()

            self.optimizer.step()

            running_loss += loss.item()

            if batch_idx % 50 == 0:
                print(
                f"Batch {batch_idx}/{len(self.train_loader)} "
                f"Loss: {loss.item():.4f}"
               )
        epoch_loss = running_loss / len(self.train_loader)
        return epoch_loss
    
    def fit(self, epochs):
        for epoch in range(epochs):
            print(f"\nEpoch {epoch + 1}/{epochs}")
            train_loss = self.train_one_epoch()
            print(f"Training Loss: {train_loss:.4f}")