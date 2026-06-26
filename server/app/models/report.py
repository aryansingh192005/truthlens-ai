from datetime import datetime
from uuid import uuid4


def create_report(
    filename: str,
    media_type: str,
    file_path: str,
):
    return {
        "report_id": str(uuid4()),
        "filename": filename,
        "media_type": media_type,
        "file_path": file_path,
        "status": "uploaded",
        "prediction": None,
        "confidence": None,
        "created_at": datetime.utcnow()
    }