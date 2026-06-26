from app.repositories.report_repository import ReportRepository

repository = ReportRepository()


def save_report(report):

    return repository.insert(report)