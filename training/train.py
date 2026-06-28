import torch.nn as nn
import torch.optim as optim

from training.configs.training_config import (
    EPOCHS,
    LEARNING_RATE,
    WEIGHT_DECAY,
)

from training.datasets.dataset import get_dataloaders
from training.models.efficientnet import build_model
from training.engine.trainer import Trainer


def main():

    print("=" * 60)
    print("TruthLens AI Training")
    print("=" * 60)

    # ---------------------------------------------
    # Load Dataset
    # ---------------------------------------------
    train_loader, val_loader, test_loader = get_dataloaders()

    # ---------------------------------------------
    # Build Model
    # ---------------------------------------------
    model = build_model()

    # ---------------------------------------------
    # Loss Function
    # ---------------------------------------------
    criterion = nn.CrossEntropyLoss()

    # ---------------------------------------------
    # Optimizer
    # Train only parameters with requires_grad=True
    # ---------------------------------------------
    optimizer = optim.Adam(
        filter(lambda p: p.requires_grad, model.parameters()),
        lr=LEARNING_RATE,
        weight_decay=WEIGHT_DECAY,
    )

    # ---------------------------------------------
    # Trainer
    # ---------------------------------------------
    trainer = Trainer(
        model=model,
        train_loader=train_loader,
        val_loader=val_loader,
        criterion=criterion,
        optimizer=optimizer,
    )

    # ---------------------------------------------
    # Train
    # ---------------------------------------------
    trainer.fit(EPOCHS)

    print("\nTraining Complete!")


if __name__ == "__main__":
    main()