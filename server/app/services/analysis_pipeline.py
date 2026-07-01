from pathlib import Path

from app.services.inference import run_inference
from app.services.face_detection import detect_faces
from app.services.metadata_analysis import analyze_metadata
from app.services.image_quality import analyze_image_quality
from app.services.error_level_analysis import perform_ela
from app.services.noise_analysis import analyze_noise
from app.services.edge_analysis import analyze_edges
from app.services.color_analysis import analyze_colors
from app.services.histogram_analysis import analyze_histogram
from app.services.blur_analysis import analyze_blur
from app.services.compression_analysis import analyze_compression
from app.services.risk_assessment import calculate_risk
from app.services.report_service import create_report


def analyze_image_pipeline(image_path: str, filename: str):
    prediction = run_inference(image_path)
    face_result = detect_faces(image_path)
    metadata = analyze_metadata(image_path)
    quality = analyze_image_quality(image_path)
    ela = perform_ela(image_path)
    noise = analyze_noise(image_path)
    edges = analyze_edges(image_path)
    colors = analyze_colors(image_path)
    histogram = analyze_histogram(image_path)
    blur = analyze_blur(image_path)
    compression = analyze_compression(image_path)

    confidence = prediction["confidence"]

    risk = calculate_risk(
        confidence,
        noise["noise_level"],
        quality["sharpness"],
        face_result["face_count"],
        metadata["metadata_entries"],
    )

    result = "REAL" if "REAL" in prediction["label"].upper() else "FAKE"

    ela_filename = Path(ela["ela_image"]).name

    analysis = {
        "prediction": result,
        "confidence": f"{confidence}%",
        "model": "prithivMLmods/Deep-Fake-Detector-Model",
        "status": "Analysis Completed",
        "filename": filename,

        "face_count": face_result["face_count"],
        "faces_detected": face_result["faces_detected"],

        "image_format": metadata["format"],
        "image_width": metadata["width"],
        "image_height": metadata["height"],
        "color_mode": metadata["mode"],
        "metadata_entries": metadata["metadata_entries"],

        "sharpness": quality["sharpness"],
        "brightness": quality["brightness"],

        "noise_level": noise["noise_level"],

        "edge_pixels": edges["edge_pixels"],

        "mean_red": colors["mean_red"],
        "mean_green": colors["mean_green"],
        "mean_blue": colors["mean_blue"],

        "histogram_mean": histogram["histogram_mean"],
        "histogram_std": histogram["histogram_std"],

        "blur_score": blur["blur_score"],

        "file_size_kb": compression["file_size_kb"],
        "extension": compression["extension"],

        "risk_score": risk["risk_score"],
        "risk_level": risk["risk_level"],

        "ela_image": f"http://127.0.0.1:8000/uploads/{ela_filename}",
        "ela_max_difference": ela["max_difference"],
    }

    report = create_report(analysis)

    analysis.update(report)

    return analysis