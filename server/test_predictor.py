from pathlib import Path

from ai_engine.predictor import predictor

image_path = Path("ai_engine") / "test.jpg"

result = predictor.predict(image_path)

print(result)