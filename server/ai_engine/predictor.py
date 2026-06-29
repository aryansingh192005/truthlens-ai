from ai_engine.models.community_detector import community_detector


class DeepfakePredictor:
    """
    Main prediction service.

    Currently uses one detector.
    Future versions will combine multiple detectors.
    """

    def predict(self, image_path):
        return community_detector.predict(image_path)


predictor = DeepfakePredictor()