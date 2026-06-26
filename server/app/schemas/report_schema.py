from pydantic import BaseModel
from typing import Optional


class ReportResponse(BaseModel):

    report_id: str

    filename: str

    media_type: str

    status: str

    prediction: Optional[str] = None

    confidence: Optional[float] = None