from ai_engine.models.deepfake_detector import deepfake_detector
from ai_engine.analyzers.forensic_report import forensic_report


class DeepfakePredictor:
    """
    Main prediction service for TruthLens AI.
    """

    def predict(self, image_path):
        ai_result = deepfake_detector.predict(image_path)

        forensic_result = forensic_report.analyze(image_path)

        return {
            "prediction": ai_result["prediction"],
            "confidence": ai_result["confidence"],
            "model": ai_result["model"],
            "raw_predictions": ai_result["raw_predictions"],
            "forensics": forensic_result,
        }


predictor = DeepfakePredictor()