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

    train_loader, val_loader, test_loader = get_dataloaders()

    model = build_model()

    criterion = nn.CrossEntropyLoss()

    optimizer = optim.Adam(
        model.parameters(),
        lr=LEARNING_RATE,
        weight_decay=WEIGHT_DECAY
    )

    trainer = Trainer(
        model=model,
        train_loader=train_loader,
        val_loader=val_loader,
        criterion=criterion,
        optimizer=optimizer,
    )

    trainer.fit(EPOCHS)

    print("\nTraining Complete!")


if __name__ == "__main__":
    main()