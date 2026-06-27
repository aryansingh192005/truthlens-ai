print("Starting dataset test...")

from training.datasets.dataset import get_dataloaders

print("Import successful.")

train_loader, val_loader, test_loader = get_dataloaders()

print("DataLoaders created.")

print(f"Train batches: {len(train_loader)}")
print(f"Validation batches: {len(val_loader)}")
print(f"Test batches: {len(test_loader)}")

images, labels = next(iter(train_loader))

print(images.shape)
print(labels.shape)

print("Dataset test passed!")