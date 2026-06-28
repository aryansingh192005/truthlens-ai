from pathlib import Path

from app.ml.inference.preprocess import preprocess_image


IMAGE_PATH = Path("tests/images/sample.jpg")

tensor = preprocess_image(IMAGE_PATH)

print("Tensor Shape:", tensor.shape)