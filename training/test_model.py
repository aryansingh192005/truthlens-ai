from training.models.efficientnet import build_model

print("Building model...")

model = build_model()

print("Model created successfully!")

print("\nClassifier:\n")
print(model.classifier)