from pathlib import Path

# =====================================================
# Dataset Root
# =====================================================

# Google Colab
if Path("/content/dataset").exists():

    DATASET_ROOT = Path("/content/dataset/Dataset")

# Local Development (VS Code)
else:

    DATASET_ROOT = (
        Path(__file__).resolve().parents[2]
        / "dataset"
    )

# =====================================================
# Dataset Parameters
# =====================================================

IMAGE_SIZE = 224

BATCH_SIZE = 32

NUM_WORKERS = 0

SEED = 42

# =====================================================
# Classes
# =====================================================

CLASSES = [
    "Fake",
    "Real",
]

NUM_CLASSES = len(CLASSES)