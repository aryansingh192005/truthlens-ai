from transformers import pipeline

classifier = None


def load_model():
    global classifier

    if classifier is None:
        classifier = pipeline(
            task="image-classification",
            model="prithivMLmods/deepfake-detector-model-v1",
            device=-1,
        )

    return classifier