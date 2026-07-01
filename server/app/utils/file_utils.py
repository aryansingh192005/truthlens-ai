from pathlib import Path


def get_extension(filename: str):
    return Path(filename).suffix.lower()


def get_filename(path: str):
    return Path(path).name


def file_size_kb(path: str):
    return round(
        Path(path).stat().st_size / 1024,
        2,
    )