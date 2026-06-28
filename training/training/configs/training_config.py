from pathlib import Path
import torch

# =====================================================
# Device
# =====================================================

DEVICE = "cuda" if torch.cuda.is_available() else "cpu"

# =====================================================
# Training
# =====================================================

EPOCHS = 15
LEARNING_RATE = 1e-4
WEIGHT_DECAY = 1e-4

PRINT_EVERY = 50

# =====================================================
# Checkpoint Directories
# =====================================================

BASE_DIR = Path(__file__).resolve().parents[2]

if Path("/kaggle/working").exists():

    CHECKPOINT_DIR = Path("/kaggle/working/checkpoints")

elif Path("/content/drive").exists():

    CHECKPOINT_DIR = Path(
        "/content/drive/MyDrive/TruthLens-AI/checkpoints"
    )

else:

    CHECKPOINT_DIR = BASE_DIR / "checkpoints"

CHECKPOINT_DIR.mkdir(parents=True, exist_ok=True)