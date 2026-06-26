import torch

from app.ml.inference.model_loader import load_model
from app.ml.preprocessing.image_processor import preprocess


def predict(image_path):

    model = load_model()

    image = preprocess(image_path)

    with torch.no_grad():

        output = model(image)

    probabilities = torch.softmax(output, dim=1)

    confidence, prediction = torch.max(probabilities, dim=1)

    return {
        "prediction": int(prediction),
        "confidence": float(confidence)
    }