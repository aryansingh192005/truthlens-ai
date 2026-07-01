from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

from app.api.routes import router as analysis_router
from app.auth.routes import router as auth_router
from app.core.config import UPLOAD_DIR
from app.db.database import Base, engine
from app.middleware.request_logger import RequestLoggerMiddleware
from app.exceptions.custom import AnalysisException
from app.exceptions.handlers import analysis_exception_handler

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="TruthLens AI API",
    version="2.1.0",
)

app.add_middleware(RequestLoggerMiddleware)

origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]

# Add Vercel frontend after deployment
vercel_url = "https://YOUR_VERCEL_APP.vercel.app"

if vercel_url not in origins:
    origins.append(vercel_url)

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.mount(
    "/uploads",
    StaticFiles(directory=UPLOAD_DIR),
    name="uploads",
)

app.include_router(auth_router)
app.include_router(analysis_router)

app.add_exception_handler(
    AnalysisException,
    analysis_exception_handler,
)


@app.get("/")
async def root():
    return {
        "message": "TruthLens AI API",
        "version": "2.1.0",
        "status": "running",
    }


@app.get("/health")
async def health():
    return {
        "status": "healthy",
        "database": "connected",
    }