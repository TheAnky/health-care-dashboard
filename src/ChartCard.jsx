import React from "react";
import { Line } from "react-chartjs-2";
import Chart, { Legend, scales } from "chart.js/auto";
import "./ChartCard.css";

const ChartCard = ({ selectedPatientData }) => {
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  const data = {
    labels: selectedPatientData?.diagnosis_history
      ?.map((item) => `${item.month.substr(0, 3)}, ${item.year}`)
      .slice(0, 6),
    datasets: [
      {
        label: "Diastolic",
        backgroundColor: "#8C6FE6",
        borderColor: "#8C6FE6",
        data: selectedPatientData?.diagnosis_history?.map(
          (item) => item.blood_pressure.diastolic.value
        ),
      },
      {
        label: "Systolic",
        backgroundColor: "#E66FD2",
        borderColor: "#E66FD2",
        data: selectedPatientData?.diagnosis_history?.map(
          (item) => item.blood_pressure.systolic.value
        ),
      },
    ],
  };

  return (
    <div className="history-container">
      <div className="chart-title">
        <h2>Blood Pressure</h2> <p>Last 6 months</p>
      </div>
      <div className="chart-container">
        <Line className="chart" options={options} data={data} />
        <div className="labels-details">
          <div className="systolic">
            <div className="legend">
              <div className="circle"></div>
              <p className="title">Systolic</p>
            </div>
            <p className="reading">
              {
                selectedPatientData?.diagnosis_history[0].blood_pressure
                  .systolic.value
              }
            </p>
            <p>Higher than average</p>
          </div>
          <div className="diastolic">
            <div className="legend">
              <div className="circle"></div>
              <p className="title">Diastolic</p>
            </div>
            <p className="reading">
              {" "}
              {
                selectedPatientData?.diagnosis_history[0].blood_pressure
                  .diastolic.value
              }
            </p>
            <p>Lower than average</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartCard;
