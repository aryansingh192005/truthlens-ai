from dataset import get_dataloaders

train_loader, val_loader, test_loader = get_dataloaders()

print("=" * 40)
print("Dataset Loaded Successfully")
print("=" * 40)

print(f"Training batches   : {len(train_loader)}")
print(f"Validation batches : {len(val_loader)}")
print(f"Testing batches    : {len(test_loader)}")

images, labels = next(iter(train_loader))

print()
print("First Batch")
print("------------")
print("Images Shape :", images.shape)
print("Labels Shape :", labels.shape)