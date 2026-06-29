from abc import ABC, abstractmethod


class BaseDetector(ABC):
    """
    Base class for all deepfake detectors.

    Every detector in TruthLens AI must inherit from this class.
    """

    @property
    @abstractmethod
    def model_name(self):
        """Human-readable model name."""
        pass

    @abstractmethod
    def predict(self, image_path):
        """
        Predict whether an image is REAL or FAKE.

        Returns:
        {
            "model": str,
            "prediction": "REAL" | "FAKE",
            "confidence": float,
            "raw_predictions": list
        }
        """
        pass