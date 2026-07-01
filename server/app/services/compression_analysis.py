from pathlib import Path


def analyze_compression(image_path: str):
    path = Path(image_path)

    size_kb = round(path.stat().st_size / 1024, 2)

    return {
        "file_size_kb": size_kb,
        "extension": path.suffix.lower(),
    }