import torch

from app.ml.inference.model_loader import load_model
from app.ml.inference.preprocess import preprocess_image


CLASSES = {
    0: "Fake",
    1: "Real",
}


def predict(image_path):

    model = load_model()

    image = preprocess_image(image_path)

    with torch.no_grad():

        outputs = model(image)

        probabilities = torch.softmax(outputs, dim=1)

        confidence, prediction = torch.max(probabilities, dim=1)

    return {
        "prediction": CLASSES[prediction.item()],
        "confidence": round(confidence.item() * 100, 2)
    }