from pathlib import Path

# =====================================================
# DATASET CONFIGURATION
# =====================================================

# Root dataset directory
DATASET_ROOT = Path("/content/dataset/Dataset")

# Image settings
IMAGE_SIZE = 224

# Training
BATCH_SIZE = 32
NUM_WORKERS = 2

# Random seed
SEED = 42

# Class names
CLASSES = [
    "Fake",
    "Real"
]