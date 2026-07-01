def calculate_risk(
    confidence,
    noise,
    sharpness,
    face_count,
    metadata_entries,
):
    score = 0

    if confidence > 90:
        score += 30

    if noise > 10:
        score += 15

    if sharpness < 100:
        score += 15

    if face_count == 0:
        score += 10

    if metadata_entries == 0:
        score += 10

    score = min(score, 100)

    if score >= 70:
        level = "High"

    elif score >= 40:
        level = "Medium"

    else:
        level = "Low"

    return {
        "risk_score": score,
        "risk_level": level,
    }