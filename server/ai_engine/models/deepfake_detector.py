from PIL import Image
from transformers import pipeline

from ai_engine.models.base_detector import BaseDetector


class DeepfakeDetector(BaseDetector):
    """
    Main AI deepfake detector used by TruthLens AI.
    """

    @property
    def model_name(self):
        return "PrithivML Deep Fake Detector v2"

    def __init__(self):
        print(f"Loading {self.model_name}...")

        self.classifier = pipeline(
            task="image-classification",
            model="prithivMLmods/Deep-Fake-Detector-v2-Model",
        )

        print(f"{self.model_name} loaded successfully!")

    def predict(self, image_path):
        image = Image.open(image_path).convert("RGB")

        predictions = self.classifier(image)

        best_prediction = max(
            predictions,
            key=lambda x: x["score"],
        )

        label = best_prediction["label"].lower()
        confidence = round(best_prediction["score"] * 100, 2)

        prediction = (
            "FAKE"
            if label == "deepfake"
            else "REAL"
        )

        return {
            "model": self.model_name,
            "prediction": prediction,
            "confidence": confidence,
            "raw_predictions": predictions,
        }


deepfake_detector = DeepfakeDetector()