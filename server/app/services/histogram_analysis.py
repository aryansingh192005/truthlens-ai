import cv2
import numpy as np


def analyze_histogram(image_path: str):
    image = cv2.imread(image_path)

    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

    histogram = cv2.calcHist([gray], [0], None, [256], [0, 256])

    histogram_mean = float(np.mean(histogram))

    histogram_std = float(np.std(histogram))

    return {
        "histogram_mean": round(histogram_mean, 2),
        "histogram_std": round(histogram_std, 2),
    }