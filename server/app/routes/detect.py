from fastapi import APIRouter, UploadFile, File

router = APIRouter(tags=["Detection"])


@router.post("/detect/image")
async def detect_image(file: UploadFile = File(...)):
    return {
        "filename": file.filename,
        "message": "Image received successfully. Detection pipeline will be added in Phase 2."
    }


@router.post("/detect/video")
async def detect_video(file: UploadFile = File(...)):
    return {
        "filename": file.filename,
        "message": "Video received successfully. Detection pipeline will be added in Phase 2."
    }