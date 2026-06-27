import os
from pathlib import Path
import torch

# -----------------------
# Paths
# -----------------------

BASE_DIR = Path(__file__).resolve().parents[2]

CHECKPOINT_DIR = BASE_DIR / "checkpoints"

CHECKPOINT_DIR.mkdir(parents=True, exist_ok=True)

# -----------------------
# Training
# -----------------------

EPOCHS = 15

LEARNING_RATE = 1e-4

WEIGHT_DECAY = 1e-4

# -----------------------
# Device
# -----------------------

DEVICE = "cuda" if torch.cuda.is_available() else "cpu"

PRINT_EVERY = 50