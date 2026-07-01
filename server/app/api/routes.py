from pathlib import Path

from fastapi import APIRouter, UploadFile, File

from app.services.file_handler import save_upload
from app.services.inference import run_inference
from app.services.face_detection import detect_faces
from app.services.metadata_analysis import analyze_metadata
from app.services.image_quality import analyze_image_quality
from app.services.error_level_analysis import perform_ela
from app.services.noise_analysis import analyze_noise
from app.services.edge_analysis import analyze_edges
from app.services.color_analysis import analyze_colors
from app.services.histogram_analysis import analyze_histogram

router = APIRouter()


@router.post("/analyze")
async def analyze_image(file: UploadFile = File(...)):
    image_path = await save_upload(file)

    prediction = run_inference(str(image_path))
    face_result = detect_faces(str(image_path))
    metadata = analyze_metadata(str(image_path))
    quality = analyze_image_quality(str(image_path))
    ela = perform_ela(str(image_path))
    noise = analyze_noise(str(image_path))
    edges = analyze_edges(str(image_path))
    colors = analyze_colors(str(image_path))
    histogram = analyze_histogram(str(image_path))

    label = prediction["label"].upper()
    result = "REAL" if "REAL" in label else "FAKE"

    ela_filename = Path(ela["ela_image"]).name

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

        "ela_image": f"http://127.0.0.1:8000/uploads/{ela_filename}",
        "ela_max_difference": ela["max_difference"],

        "noise_level": noise["noise_level"],

        "edge_pixels": edges["edge_pixels"],

        "mean_red": colors["mean_red"],
        "mean_green": colors["mean_green"],
        "mean_blue": colors["mean_blue"],

        "histogram_mean": histogram["histogram_mean"],
        "histogram_std": histogram["histogram_std"],
    }