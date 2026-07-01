from pathlib import Path

BASE_DIR = Path(__file__).resolve().parents[2]

UPLOAD_DIR = BASE_DIR / "uploads"

MODEL_DIR = BASE_DIR / "models"

ALLOWED_EXTENSIONS = {
    ".jpg",
    ".jpeg",
    ".png",
}

MAX_UPLOAD_SIZE_MB = 10

UPLOAD_DIR.mkdir(
    parents=True,
    exist_ok=True,
)

MODEL_DIR.mkdir(
    parents=True,
    exist_ok=True,
)