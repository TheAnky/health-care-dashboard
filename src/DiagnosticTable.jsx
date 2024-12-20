import React from 'react';
import './DiagnosticTable.css';

const DiagnosticTable = () => {
  const diagnostics = [
    {
      problem: 'Hypertension',
      description: 'Chronic high blood pressure',
      status: 'Under Observation'
    },
    {
      problem: 'Type 2 Diabetes',
      description: 'Insulin resistance and elevated blood sugar',
      status: 'Cured'
    },
    {
      problem: 'Asthma',
      description: 'Recurrent episodes of bronchial constriction',
      status: 'Inactive'
    },
    {
      problem: 'Osteoarthritis',
      description: 'Degenerative joint disease',
      status: 'Under treatment'
    }
  ];

  return (
    <div className="diagnostic-container">
      <h1>Diagnostic List</h1>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Problem/Diagnosis</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {diagnostics.map((item, index) => (
              <tr key={index}>
                <td>{item.problem}</td>
                <td>{item.description}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DiagnosticTable;
