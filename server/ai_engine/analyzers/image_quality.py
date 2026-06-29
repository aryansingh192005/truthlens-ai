from pathlib import Path

import cv2
import numpy as np
from PIL import Image


class ImageQualityAnalyzer:
    """
    Performs basic forensic quality analysis on an image.
    """

    def analyze(self, image_path):
        image_path = Path(image_path)

        image = cv2.imread(str(image_path))

        if image is None:
            raise ValueError("Unable to read image.")

        gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

        height, width = gray.shape

        resolution = f"{width} × {height}"

        # ---------------------------------------
        # Blur Detection
        # ---------------------------------------

        blur_score = cv2.Laplacian(
            gray,
            cv2.CV_64F,
        ).var()

        if blur_score > 250:
            blur = "Sharp"
        elif blur_score > 100:
            blur = "Moderate"
        else:
            blur = "Blurry"

        # ---------------------------------------
        # Brightness
        # ---------------------------------------

        brightness = float(np.mean(gray))

        if brightness < 70:
            brightness_level = "Dark"
        elif brightness > 180:
            brightness_level = "Bright"
        else:
            brightness_level = "Normal"

        # ---------------------------------------
        # File Size
        # ---------------------------------------

        file_size_mb = round(
            image_path.stat().st_size / (1024 * 1024),
            2,
        )

        # ---------------------------------------
        # Image Format
        # ---------------------------------------

        image_format = Image.open(image_path).format

        return {
            "resolution": resolution,
            "blur": blur,
            "blur_score": round(blur_score, 2),
            "brightness": brightness_level,
            "brightness_score": round(brightness, 2),
            "format": image_format,
            "file_size_mb": file_size_mb,
        }


image_quality_analyzer = ImageQualityAnalyzer()