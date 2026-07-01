from fastapi import Request
from fastapi.responses import JSONResponse

from app.exceptions.custom import (
    AnalysisException,
)


async def analysis_exception_handler(
    request: Request,
    exc: AnalysisException,
):
    return JSONResponse(
        status_code=400,
        content={
            "success": False,
            "message": exc.message,
        },
    )