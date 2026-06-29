from pathlib import Path

from PIL import Image
from transformers import pipeline


class DeepfakePredictor:

    def __init__(self):

        print("Loading AI model...")

        self.classifier = pipeline(
            task="image-classification",
            model="prithivMLmods/Deep-Fake-Detector-v2-Model",
        )

        print("AI model loaded successfully!")

    def predict(self, image_path):

        image = Image.open(image_path).convert("RGB")

        predictions = self.classifier(image)

        best_prediction = max(
            predictions,
            key=lambda x: x["score"]
        )

        label = best_prediction["label"]
        confidence = round(best_prediction["score"] * 100, 2)

        if label.lower() == "deepfake":
            prediction = "FAKE"
        else:
            prediction = "REAL"

        return {
            "prediction": prediction,
            "confidence": confidence,
            "raw_predictions": predictions,
        }


predictor = DeepfakePredictor()