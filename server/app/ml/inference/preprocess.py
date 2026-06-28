from pathlib import Path

import torch
from PIL import Image
from torchvision import transforms


IMAGE_SIZE = 224


transform = transforms.Compose([
    transforms.Resize((IMAGE_SIZE, IMAGE_SIZE)),
    transforms.ToTensor(),
])


def preprocess_image(image_path):

    image_path = Path(image_path)

    image = Image.open(image_path).convert("RGB")

    image = transform(image)

    image = image.unsqueeze(0)

    return image