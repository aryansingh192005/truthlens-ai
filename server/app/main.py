from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes.health import router as health_router
from app.routes.detect import router as detect_router

app = FastAPI(
    title="TruthLens AI API",
    description="Backend API for deepfake detection and media authenticity analysis.",
    version="0.1.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Later we will restrict this
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(health_router, prefix="/api")
app.include_router(detect_router, prefix="/api")


@app.get("/")
def root():
    return {
        "message": "TruthLens AI backend is running"
    }