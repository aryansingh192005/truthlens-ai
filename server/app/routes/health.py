from fastapi import APIRouter

router = APIRouter(tags=["Health"])


@router.get("/health")
def health_check():
    return {
        "status": "success",
        "message": "TruthLens AI API is healthy"
    }