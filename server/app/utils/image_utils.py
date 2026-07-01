from pathlib import Path

from PIL import Image


def open_rgb(path: str):
    return Image.open(path).convert("RGB")


def image_dimensions(path: str):
    image = Image.open(path)

    return (
        image.width,
        image.height,
    )


def image_format(path: str):
    return Image.open(path).format


def delete_file(path: str):
    path = Path(path)

    if path.exists():
        path.unlink()