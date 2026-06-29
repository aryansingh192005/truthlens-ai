from ai_engine.analyzers import (
    image_quality_analyzer,
    face_detector,
    metadata_analyzer,
)


class ForensicReport:
    """
    Combines all image forensic analyzers into a single report.
    """

    def analyze(self, image_path):
        quality = image_quality_analyzer.analyze(image_path)
        faces = face_detector.analyze(image_path)
        metadata = metadata_analyzer.analyze(image_path)

        return {
            "image_quality": quality,
            "face_analysis": faces,
            "metadata": metadata,
        }


forensic_report = ForensicReport()