from app.core.database import db


class ReportRepository:

    def __init__(self):

        self.collection = db["reports"]

    def insert(self, report):

        result = self.collection.insert_one(report)

        report["_id"] = str(result.inserted_id)

        return report