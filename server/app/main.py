from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

from app.api.routes import router
from app.core.config import UPLOAD_DIR
from app.db.database import Base, engine
from app.middleware.request_logger import RequestLoggerMiddleware
from app.exceptions.custom import AnalysisException
from app.exceptions.handlers import analysis_exception_handler

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="TruthLens AI API",
    version="2.0.0",
)

app.add_middleware(RequestLoggerMiddleware)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.mount(
    "/uploads",
    StaticFiles(directory=UPLOAD_DIR),
    name="uploads",
)

app.include_router(router)

app.add_exception_handler(
    AnalysisException,
    analysis_exception_handler,
)


@app.get("/")
async def root():
    return {
        "message": "TruthLens AI API is running.",
        "version": "2.0.0",
    }


@app.get("/health")
async def health():
    return {
        "status": "healthy",
        "database": "connected",
        "service": "TruthLens AI",
    }