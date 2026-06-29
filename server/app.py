from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from pathlib import Path
import shutil
import time

from ai_engine.predictor import predictor

app = FastAPI(title="TruthLens AI API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

UPLOAD_DIR = Path("uploads")
UPLOAD_DIR.mkdir(exist_ok=True)


@app.get("/")
def home():
    return {
        "message": "TruthLens AI API is running 🚀"
    }


@app.post("/predict")
async def predict(file: UploadFile = File(...)):

    start = time.time()

    file_path = UPLOAD_DIR / file.filename

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    result = predictor.predict(file_path)

    processing_time = round((time.time() - start) * 1000, 2)

    confidence = result["confidence"]

    if confidence >= 90:
        risk = "VERY HIGH"
    elif confidence >= 75:
        risk = "HIGH"
    elif confidence >= 60:
        risk = "MEDIUM"
    else:
        risk = "LOW"

    return {
        "prediction": result["prediction"],
        "confidence": confidence,
        "risk_level": risk,
        "processing_time_ms": processing_time
    }