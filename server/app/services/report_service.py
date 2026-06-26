from app.core.database import db


def save_report(report):
    collection = db["reports"]

    result = collection.insert_one(report)

    report["_id"] = str(result.inserted_id)

    return report