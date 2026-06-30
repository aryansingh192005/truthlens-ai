from PIL import Image, ImageChops, ImageEnhance
from pathlib import Path

from app.core.config import UPLOAD_DIR


def perform_ela(image_path: str):
    original = Image.open(image_path).convert("RGB")

    temp_path = UPLOAD_DIR / "ela_temp.jpg"

    original.save(temp_path, "JPEG", quality=90)

    compressed = Image.open(temp_path)

    diff = ImageChops.difference(original, compressed)

    extrema = diff.getextrema()

    max_diff = max([ex[1] for ex in extrema])

    if max_diff == 0:
        max_diff = 1

    scale = 255.0 / max_diff

    ela_image = ImageEnhance.Brightness(diff).enhance(scale)

    ela_output = Path(image_path).with_name(
        f"{Path(image_path).stem}_ela.png"
    )

    ela_image.save(ela_output)

    return {
        "ela_image": str(ela_output),
        "max_difference": round(max_diff, 2),
    }