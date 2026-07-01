from PIL import Image

from app.models.model_loader import load_model


LABEL_MAP = {
    "real": "Real",
    "fake": "Fake",
    "ai": "Fake",
    "generated": "Fake",
    "authentic": "Real",
    "manipulated": "Fake",
}


def normalize_label(label: str) -> str:
    label = label.lower().strip()

    for key, value in LABEL_MAP.items():
        if key in label:
            return value

    return label.title()


def run_inference(image_path: str):
    classifier = load_model()

    image = Image.open(image_path).convert("RGB")

    predictions = classifier(image)

    if not predictions:
        return {
            "label": "Unknown",
            "confidence": 0.0,
        }

    prediction = max(predictions, key=lambda x: x["score"])

    confidence = round(float(prediction["score"]) * 100, 2)

    verdict = normalize_label(prediction["label"])

    return {
        "label": verdict,
        "confidence": confidence,
    }