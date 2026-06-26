from torchvision import datasets
from torchvision import transforms
from torch.utils.data import DataLoader

from training.configs.dataset_config import *

# ===========================
# Image Transformations
# ===========================

train_transform = transforms.Compose([
    transforms.Resize((IMAGE_SIZE, IMAGE_SIZE)),
    transforms.RandomHorizontalFlip(),
    transforms.RandomRotation(10),
    transforms.ColorJitter(
        brightness=0.2,
        contrast=0.2,
        saturation=0.2
    ),
    transforms.ToTensor(),
])

val_transform = transforms.Compose([
    transforms.Resize((IMAGE_SIZE, IMAGE_SIZE)),
    transforms.ToTensor(),
])


def get_dataloaders():

    train_dataset = datasets.ImageFolder(
        DATASET_ROOT / "Train",
        transform=train_transform
    )

    val_dataset = datasets.ImageFolder(
        DATASET_ROOT / "Validation",
        transform=val_transform
    )

    test_dataset = datasets.ImageFolder(
        DATASET_ROOT / "Test",
        transform=val_transform
    )

    train_loader = DataLoader(
        train_dataset,
        batch_size=BATCH_SIZE,
        shuffle=True,
        num_workers=NUM_WORKERS
    )

    val_loader = DataLoader(
        val_dataset,
        batch_size=BATCH_SIZE,
        shuffle=False,
        num_workers=NUM_WORKERS
    )

    test_loader = DataLoader(
        test_dataset,
        batch_size=BATCH_SIZE,
        shuffle=False,
        num_workers=NUM_WORKERS
    )

    return train_loader, val_loader, test_loader