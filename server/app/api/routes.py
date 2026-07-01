from fastapi import APIRouter, UploadFile, File, HTTPException

from app.core.logger import logger
from app.schemas.analysis import AnalysisResponse
from app.services.analysis_pipeline import analyze_image_pipeline
from app.services.file_handler import save_upload

router = APIRouter()


@router.post(
    "/analyze",
    response_model=AnalysisResponse,
)
async def analyze_image(
    file: UploadFile = File(...)
):
    try:
        logger.info(f"Received file: {file.filename}")

        image_path = await save_upload(file)

        result = analyze_image_pipeline(
            str(image_path),
            file.filename,
        )

        logger.info("Analysis completed successfully.")

        return result

    except Exception as e:
        logger.exception("Analysis failed.")

        raise HTTPException(
            status_code=500,
            detail=str(e),
        )