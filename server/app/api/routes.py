from fastapi import APIRouter, UploadFile, File

from app.services.file_handler import save_upload
from app.services.inference import run_inference
from app.services.face_detection import detect_faces
from app.services.metadata_analysis import analyze_metadata
from app.services.image_quality import analyze_image_quality
from app.services.error_level_analysis import perform_ela

router = APIRouter()


@router.post("/analyze")
async def analyze_image(file: UploadFile = File(...)):
    image_path = await save_upload(file)

    prediction = run_inference(str(image_path))

    face_result = detect_faces(str(image_path))

    metadata = analyze_metadata(str(image_path))

    quality = analyze_image_quality(str(image_path))

    ela = perform_ela(str(image_path))

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

        "face_count": face_result["face_count"],
        "faces_detected": face_result["faces_detected"],

        "image_format": metadata["format"],
        "image_width": metadata["width"],
        "image_height": metadata["height"],
        "color_mode": metadata["mode"],
        "metadata_entries": metadata["metadata_entries"],

        "sharpness": quality["sharpness"],
        "brightness": quality["brightness"],

        "ela_image": ela["ela_image"],
        "ela_max_difference": ela["max_difference"],
    }