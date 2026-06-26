from training.datasets.dataset import get_dataloaders
from training.models.efficientnet import build_model


def main():

    print("=" * 50)
    print("TruthLens AI")
    print("Deepfake Detection Training")
    print("=" * 50)

    train_loader, val_loader, test_loader = get_dataloaders()

    model = build_model()

    print()
    print("Dataset Loaded Successfully")
    print(f"Training batches: {len(train_loader)}")

    print()
    print("Model Built Successfully")
    print(model.__class__.__name__)


if __name__ == "__main__":
    main()