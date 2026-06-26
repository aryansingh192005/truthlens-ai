from fastapi import APIRouter
from fastapi import UploadFile
from fastapi import File
from fastapi import HTTPException

from app.utils.validator import get_media_type
from app.services.file_service import save_upload
from app.models.report import create_report
from app.services.report_service import save_report

router = APIRouter(tags=["Detection"])


@router.post("/upload")
async def upload_media(
    file: UploadFile = File(...)
):

    media_type = get_media_type(file.filename)

    if media_type is None:
        raise HTTPException(
            status_code=400,
            detail="Unsupported file format."
        )

    file_path = save_upload(
        file,
        media_type
    )

    report = create_report(
        filename=file.filename,
        media_type=media_type,
        file_path=file_path
    )

    saved_report = save_report(report)
    return {
    "success": True,
    "report": saved_report
}