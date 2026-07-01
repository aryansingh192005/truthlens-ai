import cv2
import numpy as np


def analyze_colors(image_path: str):
    image = cv2.imread(image_path)

    mean_b = float(np.mean(image[:, :, 0]))
    mean_g = float(np.mean(image[:, :, 1]))
    mean_r = float(np.mean(image[:, :, 2]))

    return {
        "mean_red": round(mean_r, 2),
        "mean_green": round(mean_g, 2),
        "mean_blue": round(mean_b, 2),
    }