from PIL import Image

from app.models.model_loader import load_model


def run_inference(image_path: str):
    classifier = load_model()

    image = Image.open(image_path).convert("RGB")

    prediction = classifier(image)[0]

    return {
        "label": prediction["label"],
        "confidence": round(prediction["score"] * 100, 2),
    }