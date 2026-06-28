from pathlib import Path

import torch

from training.models.efficientnet import build_model


MODEL_PATH = Path("../ml/weights/best_model.pth")

_model = None


def load_model():

    global _model

    if _model is not None:
        return _model

    model = build_model()

    checkpoint = torch.load(
        MODEL_PATH,
        map_location="cpu"
    )

    if "model_state_dict" in checkpoint:
        model.load_state_dict(checkpoint["model_state_dict"])
    else:
        model.load_state_dict(checkpoint)

    model.eval()

    _model = model

    return _model