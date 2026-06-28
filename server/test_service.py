from pathlib import Path

from app.services.inference_service import InferenceService


IMAGE = Path("tests/images/sample.jpg")

result = InferenceService.predict_image(IMAGE)

print(result)