import cv2
import numpy as np


def analyze_image_quality(image_path: str):
    image = cv2.imread(image_path)

    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

    sharpness = cv2.Laplacian(gray, cv2.CV_64F).var()

    brightness = np.mean(gray)

    return {
        "sharpness": round(float(sharpness), 2),
        "brightness": round(float(brightness), 2),
    }