import json
import uuid
from datetime import datetime

from app.core.config import BASE_URL, UPLOAD_DIR


def build_summary(result: dict):
    prediction = result["prediction"]

    confidence = float(result["confidence"].replace("%", ""))

    risk = result["risk_score"]

    if prediction == "REAL":
        verdict = (
            "The uploaded image appears authentic "
            "based on the current AI model."
        )
    else:
        verdict = (
            "The uploaded image shows indicators "
            "commonly associated with manipulated media."
        )

    return (
        f"{verdict} "
        f"Prediction confidence: {confidence:.2f}%. "
        f"Overall forensic risk score: {risk}/100."
    )


def create_report(result: dict):
    report_id = uuid.uuid4().hex[:12]

    timestamp = datetime.utcnow().isoformat()

    report = {
        "report_id": report_id,
        "generated_at": timestamp,
        "prediction": result["prediction"],
        "confidence": result["confidence"],
        "risk_score": result["risk_score"],
        "risk_level": result["risk_level"],
        "trust_score": 100 - result["risk_score"],
        "filename": result["filename"],
        "ai_summary": build_summary(result),
    }

    report_path = UPLOAD_DIR / f"{report_id}.json"

    with open(report_path, "w", encoding="utf-8") as file:
        json.dump(report, file, indent=4)

    report["report_url"] = (
        f"{BASE_URL}/uploads/{report_path.name}"
    )

    return report