from app.ml.inference.preprocess import preprocess_image

image = preprocess_image("tests/images/sample.jpg")

print(image.shape)