import "./App.css";
import Navbar from "./NavBar";
import PatientList from "./PatientList";
import DiagnosticTable from "./DiagnosticTable";
import LabResults from "./LabResults";
import MetricCard from "./HealthCards";
import ProfileCard from "./ProfileCard";
import { useState } from "react";
import ChartCard from "./ChartCard";
import SearchBar from "./SearchBar";

function App() {
  const [selectedPatientData, setSelectedPatientData] = useState({});

  return (
    <main className="main">
      <Navbar />
      <section className="main-body">
        <section className="left-body">
          <PatientList setSelectedPatientData={setSelectedPatientData} />
        </section>
        <section className="mid-body">
          <section className="mid-body-upper">
            <h1 className="history-heading">Diagnosis History</h1>
            <ChartCard selectedPatientData={selectedPatientData[0]} />
            <MetricCard selectedPatientData={selectedPatientData[0]} />
          </section>
          <section className="mid-body-bottom">
            <DiagnosticTable />
          </section>
        </section>

        <section className="right-body">
          <section className="right-body-upper">
            <ProfileCard selectedPatientData={selectedPatientData[0]} />
          </section>
          <section className="right-body-bottom">
            <LabResults />
          </section>
        </section>
        <section>{/* <SearchBar /> */}</section>
      </section>
    </main>
  );
}

export default App;
