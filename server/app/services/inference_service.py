from pathlib import Path

from app.ml.inference.predictor import predict


class InferenceService:

    @staticmethod
    def predict_image(image_path: Path):

        result = predict(image_path)

        return result