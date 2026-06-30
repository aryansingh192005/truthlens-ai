import shutil
from pathlib import Path

from fastapi import UploadFile

from app.core.config import UPLOAD_DIR


async def save_upload(file: UploadFile) -> Path:
    file_path = UPLOAD_DIR / file.filename

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    return file_path