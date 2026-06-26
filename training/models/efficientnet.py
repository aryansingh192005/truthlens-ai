import torch.nn as nn
from torchvision.models import efficientnet_b0
from torchvision.models import EfficientNet_B0_Weights


def build_model():

    weights = EfficientNet_B0_Weights.DEFAULT

    model = efficientnet_b0(weights=weights)

    for param in model.parameters():
        param.requires_grad = False

    in_features = model.classifier[1].in_features

    model.classifier = nn.Sequential(
        nn.Dropout(0.3),
        nn.Linear(in_features, 2)
    )

    return model