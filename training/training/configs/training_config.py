import torch

# Training
EPOCHS = 10
LEARNING_RATE = 1e-4
WEIGHT_DECAY = 1e-4

# Device
DEVICE = "cuda" if torch.cuda.is_available() else "cpu"

# Checkpoints
CHECKPOINT_DIR = "checkpoints"

# Logging
PRINT_EVERY = 10