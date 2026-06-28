from pathlib import Path

from app.ml.inference.predictor import predict

IMAGE = Path("tests/images/sample.jpg")

result = predict(IMAGE)

print(result)