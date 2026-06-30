from PIL import Image


def analyze_metadata(image_path: str):
    image = Image.open(image_path)

    metadata = image.getexif()

    return {
        "format": image.format,
        "width": image.width,
        "height": image.height,
        "mode": image.mode,
        "metadata_entries": len(metadata),
    }