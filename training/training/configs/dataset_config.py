from pathlib import Path
import os

# =====================================================
# Detect Environment
# =====================================================

if os.path.exists("/content"):
    # Running in Google Colab
    PROJECT_ROOT = Path("/content/dataset/Dataset")
else:
    # Running locally
    PROJECT_ROOT = Path(__file__).resolve().parents[2] / "prepared_dataset"

# =====================================================
# Dataset
# =====================================================

from pathlib import Path

# -----------------------------
# Dataset Root
# -----------------------------

if Path("/kaggle/input").exists():

    DATASET_ROOT = Path(
        "/kaggle/input/datasets/manjilkarki/deepfake-and-real-images/Dataset"
    )

elif Path("/content/dataset").exists():

    DATASET_ROOT = Path("/content/dataset/Dataset")

else:

    DATASET_ROOT = Path("dataset")

IMAGE_SIZE = 224

BATCH_SIZE = 32

NUM_WORKERS = 2

SEED = 42

CLASSES = [
    "Fake",
    "Real"
]