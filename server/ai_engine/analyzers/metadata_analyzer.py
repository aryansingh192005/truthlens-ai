from pathlib import Path
from PIL import Image
from PIL.ExifTags import TAGS


class MetadataAnalyzer:
    """
    Extracts useful metadata from an image.
    """

    def analyze(self, image_path):
        image_path = Path(image_path)

        image = Image.open(image_path)

        exif = image.getexif()

        metadata = {}

        if exif:
            for tag_id, value in exif.items():
                tag = TAGS.get(tag_id, tag_id)
                metadata[str(tag)] = str(value)

        camera = metadata.get("Model", "Unknown")
        manufacturer = metadata.get("Make", "Unknown")
        software = metadata.get("Software", "Unknown")
        date_taken = metadata.get("DateTime", "Unknown")

        return {
            "format": image.format,
            "mode": image.mode,
            "width": image.width,
            "height": image.height,
            "camera": camera,
            "manufacturer": manufacturer,
            "software": software,
            "date_taken": date_taken,
            "metadata_available": len(metadata) > 0,
            "metadata_count": len(metadata),
        }


metadata_analyzer = MetadataAnalyzer()