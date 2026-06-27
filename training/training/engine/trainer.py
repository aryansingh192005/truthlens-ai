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