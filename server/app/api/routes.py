from fastapi import APIRouter, UploadFile, File

from app.services.file_handler import save_upload
from app.services.inference import run_inference

router = APIRouter()


@router.post("/analyze")
async def analyze_image(file: UploadFile = File(...)):
    image_path = await save_upload(file)

    prediction = run_inference(str(image_path))

    label = prediction["label"].upper()

    if "REAL" in label:
        result = "REAL"
    else:
        result = "FAKE"

    return {
        "prediction": result,
        "confidence": f"{prediction['confidence']}%",
        "model": "prithivMLmods/Deep-Fake-Detector-Model",
        "status": "Analysis Completed",
        "filename": file.filename,
    }