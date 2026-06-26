import os
import shutil

UPLOAD_DIR = "app/uploads"


def save_upload(upload_file, media_type):

    folder = "images" if media_type == "image" else "videos"

    save_dir = os.path.join(UPLOAD_DIR, folder)

    os.makedirs(save_dir, exist_ok=True)

    file_path = os.path.join(save_dir, upload_file.filename)

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(upload_file.file, buffer)

    return file_path