import React from "react";
import "./HealthCards.css";

const MetricCard = ({ title, value, status, iconSrc }) => (
  <div className="card">
    <div className="icon-container">
      <img src={iconSrc} alt={title} className="metric-icon" />
    </div>
    <h2 className="metric-title">{title}</h2>
    <p className="metric-value">{value}</p>
    <p
      className={`metric-status ${
        status === "Normal" ? "normal" : "below-average"
      }`}
    >
      {status}
    </p>
  </div>
);

const HealthMetrics = ({ selectedPatientData }) => {
  const latestDiagnosis = selectedPatientData?.diagnosis_history[0];
  const metrics = [
    {
      title: "Respiratory Rate",
      value: latestDiagnosis?.respiratory_rate?.value,
      status: latestDiagnosis?.respiratory_rate?.levels,
      iconSrc: "./src/assets/HealthCareDashboard/respiratory rate.svg",
    },
    {
      title: "Temperature",
      value: latestDiagnosis?.temperature?.value,
      status: latestDiagnosis?.temperature?.levels,
      iconSrc: "./src/assets/HealthCareDashboard/temperature.svg",
    },
    {
      title: "Heart Rate",
      value: latestDiagnosis?.heart_rate?.value,
      status: latestDiagnosis?.heart_rate?.levels,
      iconSrc: "./src/assets/HealthCareDashboard/HeartBPM.svg",
    },
  ];

  return (
    <div className="metrics-container">
      {metrics.map((metric, index) => (
        <div
          key={index}
          className={`card-wrapper ${metric.title
            .toLowerCase()
            .replace(" ", "-")}`}
        >
          <MetricCard {...metric} />
        </div>
      ))}
    </div>
  );
};

export default HealthMetrics;
