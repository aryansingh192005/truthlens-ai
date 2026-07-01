import shutil
import uuid
from pathlib import Path

from fastapi import UploadFile

from app.core.config import (
    ALLOWED_EXTENSIONS,
    MAX_UPLOAD_SIZE_MB,
    UPLOAD_DIR,
)
from app.exceptions.custom import (
    AnalysisException,
)


async def save_upload(
    file: UploadFile,
) -> Path:
    extension = (
        Path(file.filename)
        .suffix
        .lower()
    )

    if extension not in ALLOWED_EXTENSIONS:
        raise AnalysisException(
            "Unsupported file format."
        )

    data = await file.read()

    if (
        len(data)
        > MAX_UPLOAD_SIZE_MB
        * 1024
        * 1024
    ):
        raise AnalysisException(
            f"Maximum upload size is {MAX_UPLOAD_SIZE_MB} MB."
        )

    filename = (
        f"{uuid.uuid4().hex}"
        f"{extension}"
    )

    destination = (
        UPLOAD_DIR
        / filename
    )

    with open(
        destination,
        "wb",
    ) as buffer:
        buffer.write(data)

    await file.seek(0)

    return destination