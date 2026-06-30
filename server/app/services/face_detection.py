from PIL import Image
import cv2
import numpy as np


cascade = cv2.CascadeClassifier(
    cv2.data.haarcascades + "haarcascade_frontalface_default.xml"
)


def detect_faces(image_path: str):
    image = Image.open(image_path).convert("RGB")

    image_np = np.array(image)

    gray = cv2.cvtColor(image_np, cv2.COLOR_RGB2GRAY)

    faces = cascade.detectMultiScale(
        gray,
        scaleFactor=1.1,
        minNeighbors=5,
        minSize=(40, 40),
    )

    return {
        "face_count": len(faces),
        "faces_detected": len(faces) > 0,
    }