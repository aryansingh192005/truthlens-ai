import time

from starlette.middleware.base import BaseHTTPMiddleware

from app.core.logger import logger


class RequestLoggerMiddleware(
    BaseHTTPMiddleware
):
    async def dispatch(
        self,
        request,
        call_next,
    ):
        start = time.time()

        response = await call_next(request)

        duration = (
            time.time() - start
        ) * 1000

        logger.info(
            f"{request.method} "
            f"{request.url.path} "
            f"{duration:.2f} ms"
        )

        return response