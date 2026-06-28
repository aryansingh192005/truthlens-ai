import torch.nn as nn

from torchvision.models import (
    efficientnet_b0,
    EfficientNet_B0_Weights,
)

from training.configs.dataset_config import NUM_CLASSES


def build_model(num_classes=NUM_CLASSES):
    """
    Builds an EfficientNet-B0 model for deepfake detection.

    Fine-Tuning Strategy:
    - Freeze early feature extractor layers.
    - Unfreeze the last two feature blocks.
    - Replace the classifier for binary classification.
    """

    # --------------------------------------------------
    # Load pretrained EfficientNet-B0
    # --------------------------------------------------

    weights = EfficientNet_B0_Weights.DEFAULT
    model = efficientnet_b0(weights=weights)

    # --------------------------------------------------
    # Freeze entire backbone
    # --------------------------------------------------

    for param in model.features.parameters():
        param.requires_grad = False

    # --------------------------------------------------
    # Fine-tune last feature blocks
    # --------------------------------------------------

    for param in model.features[7].parameters():
        param.requires_grad = True

    for param in model.features[8].parameters():
        param.requires_grad = True

    # --------------------------------------------------
    # Replace classifier
    # --------------------------------------------------

    in_features = model.classifier[1].in_features

    model.classifier = nn.Sequential(
        nn.Dropout(p=0.3),
        nn.Linear(in_features, num_classes),
    )

    return model