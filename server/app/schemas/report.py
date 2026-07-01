from pydantic import BaseModel


class ReportResponse(BaseModel):
    report_id: str
    generated_at: str
    prediction: str
    confidence: str
    risk_score: int
    risk_level: str
    trust_score: int
    ai_summary: str
    filename: str