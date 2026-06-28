from pathlib import Path
import torch

# =====================================================
# Device Configuration
# =====================================================

DEVICE = "cuda" if torch.cuda.is_available() else "cpu"

# =====================================================
# Training Hyperparameters
# =====================================================

EPOCHS = 10                 # Fine-tuning epochs
LEARNING_RATE = 1e-5        # Lower LR for fine-tuning
WEIGHT_DECAY = 1e-4

PRINT_EVERY = 50

# =====================================================
# Base Directory
# =====================================================

BASE_DIR = Path(__file__).resolve().parents[2]

# =====================================================
# Google Colab + Google Drive
# =====================================================

COLAB_DRIVE = Path("/content/drive")

if COLAB_DRIVE.exists():

    PROJECT_DIR = COLAB_DRIVE / "MyDrive" / "TruthLens-AI"

else:

    # Local development (VS Code)
    PROJECT_DIR = BASE_DIR

# =====================================================
# Checkpoints
# =====================================================

CHECKPOINT_DIR = PROJECT_DIR / "checkpoints"
CHECKPOINT_DIR.mkdir(parents=True, exist_ok=True)

# =====================================================
# Logs
# =====================================================

LOG_DIR = PROJECT_DIR / "logs"
LOG_DIR.mkdir(parents=True, exist_ok=True)

# =====================================================
# Exported Models & Results
# =====================================================

EXPORT_DIR = PROJECT_DIR / "exports"
EXPORT_DIR.mkdir(parents=True, exist_ok=True)

# =====================================================
# Experiment Information
# =====================================================

EXPERIMENT_NAME = "EfficientNetB0_FineTune_v1"