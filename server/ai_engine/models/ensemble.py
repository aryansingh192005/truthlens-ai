from collections import Counter


class EnsembleDetector:
    """
    Combines predictions from multiple AI models.

    Current strategy:
    - Majority voting
    - Average confidence of agreeing models

    Future:
    - Weighted voting
    - Reliability scoring
    - Model calibration
    """

    def predict(self, predictions):
        """
        Parameters
        ----------
        predictions : list

        Example:
        [
            {
                "model": "...",
                "prediction": "REAL",
                "confidence": 91.2
            },
            ...
        ]
        """

        if len(predictions) == 0:
            raise ValueError("No predictions received.")

        # -----------------------------
        # Majority Vote
        # -----------------------------

        labels = [
            prediction["prediction"]
            for prediction in predictions
        ]

        vote_counter = Counter(labels)

        final_prediction = vote_counter.most_common(1)[0][0]

        # -----------------------------
        # Average Confidence
        # -----------------------------

        agreeing_predictions = [
            prediction["confidence"]
            for prediction in predictions
            if prediction["prediction"] == final_prediction
        ]

        average_confidence = round(
            sum(agreeing_predictions)
            / len(agreeing_predictions),
            2,
        )

        return {
            "prediction": final_prediction,
            "confidence": average_confidence,
            "votes": dict(vote_counter),
            "models": predictions,
        }


ensemble = EnsembleDetector()