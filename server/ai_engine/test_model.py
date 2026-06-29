from pathlib import Path
from transformers import pipeline
from PIL import Image

print("Loading model...")

classifier = pipeline(
    "image-classification",
    model="prithivMLmods/Deep-Fake-Detector-v2-Model",
)

print("Model loaded successfully!")

# Locate test image
image_path = Path(__file__).parent / "test.jpg"

print(f"Reading image from: {image_path}")

image = Image.open(image_path).convert("RGB")

result = classifier(image)

print("\nPrediction:")
print(result)