import random

from torch.utils.data import DataLoader
from torchvision import transforms

from training.configs.dataset_config import (
    DATASET_ROOT,
    IMAGE_SIZE,
    BATCH_SIZE,
    NUM_WORKERS,
    SEED,
)

from training.datasets.deepfake_dataset import DeepfakeDataset

random.seed(SEED)


def get_transforms():
    train_transform = transforms.Compose([
        transforms.Resize((IMAGE_SIZE, IMAGE_SIZE)),
        transforms.RandomHorizontalFlip(),
        transforms.RandomRotation(10),
        transforms.ColorJitter(
            brightness=0.2,
            contrast=0.2,
            saturation=0.2
        ),
        transforms.ToTensor()
    ])

    val_transform = transforms.Compose([
        transforms.Resize((IMAGE_SIZE, IMAGE_SIZE)),
        transforms.ToTensor()
    ])

    return train_transform, val_transform


def collect_images(split):

    image_paths = []
    labels = []

    classes = {
        "Fake": 0,
        "Real": 1
    }

    for class_name, label in classes.items():

        folder = DATASET_ROOT / split / class_name

        if not folder.exists():
            raise FileNotFoundError(f"Folder not found: {folder}")

        for image_path in folder.iterdir():

            if image_path.is_file():

                image_paths.append(image_path)
                labels.append(label)

    return image_paths, labels


def shuffle_dataset(image_paths, labels):

    combined = list(zip(image_paths, labels))

    if not combined:
        return [], []

    random.shuffle(combined)

    image_paths, labels = zip(*combined)

    return list(image_paths), list(labels)


def get_dataloaders():

    train_transform, val_transform = get_transforms()

    train_paths, train_labels = collect_images("Train")
    val_paths, val_labels = collect_images("Validation")
    test_paths, test_labels = collect_images("Test")

    train_paths, train_labels = shuffle_dataset(train_paths, train_labels)
    val_paths, val_labels = shuffle_dataset(val_paths, val_labels)
    test_paths, test_labels = shuffle_dataset(test_paths, test_labels)

    train_dataset = DeepfakeDataset(
        train_paths,
        train_labels,
        transform=train_transform
    )

    val_dataset = DeepfakeDataset(
        val_paths,
        val_labels,
        transform=val_transform
    )

    test_dataset = DeepfakeDataset(
        test_paths,
        test_labels,
        transform=val_transform
    )

    train_loader = DataLoader(
        train_dataset,
        batch_size=BATCH_SIZE,
        shuffle=True,
        num_workers=NUM_WORKERS,
    )

    val_loader = DataLoader(
        val_dataset,
        batch_size=BATCH_SIZE,
        shuffle=False,
        num_workers=NUM_WORKERS,
    )

    test_loader = DataLoader(
        test_dataset,
        batch_size=BATCH_SIZE,
        shuffle=False,
        num_workers=NUM_WORKERS,
    )

    return train_loader, val_loader, test_loader