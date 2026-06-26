from pathlib import Path
import random
import shutil

# ----------------------------
# Configuration
# ----------------------------

RANDOM_SEED = 42
random.seed(RANDOM_SEED)

SOURCE = Path("/content/dataset/Dataset")

DESTINATION = Path("/content/prepared_dataset")

TRAIN_SAMPLES = 25000
VAL_SAMPLES = 5000

# Test set will remain complete
def copy_random_images(source_folder, destination_folder, num_images):

    destination_folder.mkdir(parents=True, exist_ok=True)

    images = list(source_folder.glob("*"))

    selected = random.sample(images, min(num_images, len(images)))

    for image in selected:
        shutil.copy(image, destination_folder / image.name)

    print(f"{destination_folder.name}: {len(selected)} images copied.")

    def prepare():

     print("Preparing Dataset...")

    classes = ["Fake", "Real"]

    for cls in classes:

        copy_random_images(
            SOURCE / "Train" / cls,
            DESTINATION / "Train" / cls,
            TRAIN_SAMPLES
        )

        copy_random_images(
            SOURCE / "Validation" / cls,
            DESTINATION / "Validation" / cls,
            VAL_SAMPLES
        )

        shutil.copytree(
            SOURCE / "Test" / cls,
            DESTINATION / "Test" / cls,
            dirs_exist_ok=True
        )

    print("Dataset Ready!")

    if __name__ == "__main__":
     prepare()