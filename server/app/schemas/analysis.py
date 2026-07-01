from pydantic import BaseModel


class AnalysisResponse(BaseModel):
    prediction: str
    confidence: str
    model: str
    status: str
    filename: str

    face_count: int
    faces_detected: bool

    image_format: str
    image_width: int
    image_height: int
    color_mode: str
    metadata_entries: int

    sharpness: float
    brightness: float

    noise_level: float

    edge_pixels: int

    mean_red: float
    mean_green: float
    mean_blue: float

    histogram_mean: float
    histogram_std: float

    blur_score: float

    file_size_kb: float
    extension: str

    risk_score: int
    risk_level: str

    ela_image: str
    ela_max_difference: float