from pathlib import Path

# Root directory of the dataset
DATASET_ROOT = Path("../dataset")

# Image size expected by EfficientNet-B0
IMAGE_SIZE = 224

# Batch size
BATCH_SIZE = 16

# Number of workers
NUM_WORKERS = 2

# Training epochs
EPOCHS = 10

# Learning rate
LEARNING_RATE = 1e-4

# Random seed
SEED = 42