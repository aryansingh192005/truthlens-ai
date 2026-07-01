import cv2
import numpy as np


def analyze_noise(image_path: str):
    image = cv2.imread(image_path)

    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

    blurred = cv2.GaussianBlur(gray, (5, 5), 0)

    noise = cv2.absdiff(gray, blurred)

    noise_level = float(np.std(noise))

    return {
        "noise_level": round(noise_level, 2),
    }