export default function ConfidenceGauge({ confidence, prediction }) {
  const radius = 70;
  const stroke = 12;

  const normalizedRadius = radius - stroke * 0.5;

  const circumference = normalizedRadius * 2 * Math.PI;

  const progress =
    circumference - (confidence / 100) * circumference;

  const color =
    prediction === "REAL"
      ? "#22c55e"
      : "#ef4444";

  return (
    <div className="flex flex-col items-center justify-center">

      <svg
        height={radius * 2}
        width={radius * 2}
      >

        <circle
          stroke="#334155"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />

        <circle
          stroke={color}
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={progress}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          style={{
            transition: "stroke-dashoffset 1s ease",
            transform: "rotate(-90deg)",
            transformOrigin: "50% 50%",
          }}
        />

        <text
          x="50%"
          y="48%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="fill-white text-2xl font-bold"
        >
          {confidence}%
        </text>

        <text
          x="50%"
          y="68%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="fill-slate-400 text-sm"
        >
          Confidence
        </text>

      </svg>

    </div>
  );
}