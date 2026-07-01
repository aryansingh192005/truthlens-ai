import shutil
import uuid
from pathlib import Path

from fastapi import UploadFile

from app.core.config import UPLOAD_DIR


async def save_upload(file: UploadFile) -> Path:
    extension = Path(file.filename).suffix

    filename = f"{uuid.uuid4().hex}{extension}"

    destination = UPLOAD_DIR / filename

    with open(destination, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    return destination