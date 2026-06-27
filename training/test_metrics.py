from training.utils.metrics import calculate_metrics

labels = [0, 1, 1, 0, 1]

predictions = [0, 1, 0, 0, 1]

metrics = calculate_metrics(labels, predictions)

for name, value in metrics.items():
    print(f"{name}: {value:.4f}")