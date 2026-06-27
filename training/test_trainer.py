import torch.nn as nn
import torch.optim as optim

from training.configs.training_config import EPOCHS
from training.datasets.dataset import get_dataloaders
from training.models.efficientnet import build_model
from training.engine.trainer import Trainer

print("Loading dataset...")
train_loader, val_loader, test_loader = get_dataloaders()

print("Building model...")
model = build_model()

criterion = nn.CrossEntropyLoss()

optimizer = optim.Adam(
    model.parameters(),
    lr=1e-4
)

trainer = Trainer(
    model,
    train_loader,
    val_loader,
    criterion,
    optimizer,
)

print("Starting training...")

trainer.fit(epochs=1)