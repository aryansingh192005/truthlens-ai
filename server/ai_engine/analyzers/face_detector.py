import cv2
from pathlib import Path


class FaceDetector:
    """
    Detects human faces using OpenCV Haar Cascade.
    """

    def __init__(self):
        self.detector = cv2.CascadeClassifier(
            cv2.data.haarcascades + "haarcascade_frontalface_default.xml"
        )

    def analyze(self, image_path):
        image_path = Path(image_path)

        image = cv2.imread(str(image_path))

        if image is None:
            raise ValueError("Unable to read image.")

        gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

        faces = self.detector.detectMultiScale(
            gray,
            scaleFactor=1.1,
            minNeighbors=5,
            minSize=(40, 40),
        )

        return {
            "faces_detected": len(faces),
            "face_present": len(faces) > 0,
        }


face_detector = FaceDetector()