import React from "react";
import "./LabResults.css";

const LabResults = () => {
  const tests = [
    { name: "Blood Tests", downloadable: true },
    { name: "CT Scans", downloadable: true },
    { name: "Radiology Reports", downloadable: true },
    { name: "X-Rays", downloadable: true },
    { name: "Urine Test", downloadable: true },
  ];

  return (
    <div className="lab-container">
      <h1>Lab Results</h1>
      <div className="results-list">
        {tests.map((test, index) => (
          <div key={index} className="result-item">
            <span>{test.name}</span>
            <button
              className={`download-button ${
                !test.downloadable ? "disabled" : ""
              }`}
              disabled={!test.downloadable}
            >
              <img
                src="./src/assets/HealthCareDashboard/download_FILL0_wght300_GRAD0_opsz24 (1).svg"
                alt=""
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LabResults;
