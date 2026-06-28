from pathlib import Path

# -------------------------------------------------
# Paths
# -------------------------------------------------

BASE_DIR = Path(__file__).resolve().parents[2]

# Local checkpoint folder (for local training)
LOCAL_CHECKPOINT_DIR = BASE_DIR / "checkpoints"

LOCAL_CHECKPOINT_DIR.mkdir(parents=True, exist_ok=True)

# Google Drive checkpoint folder (for Colab)
GOOGLE_DRIVE_CHECKPOINT_DIR = Path(
    "/content/drive/MyDrive/TruthLens-AI/checkpoints"
)