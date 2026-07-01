import cv2
import numpy as np


def analyze_edges(image_path: str):
    image = cv2.imread(image_path)

    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

    edges = cv2.Canny(gray, 100, 200)

    edge_pixels = int(np.sum(edges > 0))

    return {
        "edge_pixels": edge_pixels,
    }