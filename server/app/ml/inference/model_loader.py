import torch

from app.ml.models.deepfake_model import DeepfakeDetector

MODEL = None


def load_model():

    global MODEL

    if MODEL is None:

        MODEL = DeepfakeDetector()

        MODEL.eval()

    return MODEL