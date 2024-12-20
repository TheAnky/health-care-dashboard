import React, { useEffect, useState } from "react";
import "./PatientList.css";

const PatientList = ({ setSelectedPatientData }) => {
  const [selectedPatient, setSelectedPatient] = useState("Jessica Taylor");
  const [patients, setPatients] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState(patients);

  useEffect(() => {
    (async () => {
      let username = "coalition";
      let password = "skills-test";
      let auth = btoa(`${username}:${password}`);
      let response = await fetch(
        "https://fedskillstest.coalitiontechnologies.workers.dev",
        {
          headers: {
            Authorization: `Basic ${auth}`,
          },
        }
      );
      if (response.ok) {
        const result = await response.json();
        const data = result.filter((item) => item.name === selectedPatient);

        const Mareez = result.map((item) => {
          return {
            name: item.name,
            age: item.age,
            gender: item.gender,
            src: item.profile_picture,
          };
        });
        setPatients(Mareez);

        setSelectedPatientData(data);
      } else {
        console.warn("error in API");
      }
    })();
  }, [selectedPatient]);

  // const patients = [
  //   {
  //     name: "Emily Williams",
  //     gender: "Female",
  //     age: 18,
  //     src: "./src/assets/HealthCareDashboard/Layer 4.png",
  //   },
  //   {
  //     name: "Ryan Johnson",
  //     gender: "Male",
  //     age: 45,
  //     src: "./src/assets/HealthCareDashboard/Layer1.png",
  //   },
  //   {
  //     name: "Brandon Mitchell",
  //     gender: "Male",
  //     age: 36,
  //     src: "./src/assets/HealthCareDashboard/Layer 3.png",
  //   },
  //   {
  //     name: "Jessica Taylor",
  //     gender: "Female",
  //     age: 28,
  //     src: "./src/assets/HealthCareDashboard/Layer 2.png",
  //   },
  //   {
  //     name: "Samantha Johnson",
  //     gender: "Female",
  //     age: 56,
  //     src: "./src/assets/HealthCareDashboard/Layer 5.png",
  //   },
  //   {
  //     name: "Ashley Martinez",
  //     gender: "Female",
  //     age: 54,
  //     src: "./src/assets/HealthCareDashboard/Layer 6.png",
  //   },
  //   {
  //     name: "Olivia Brown",
  //     gender: "Female",
  //     age: 32,
  //     src: "./src/assets/HealthCareDashboard/Layer 12.png",
  //   },
  //   {
  //     name: "Tyler Davis",
  //     gender: "Male",
  //     age: 19,
  //     src: "./src/assets/HealthCareDashboard/Layer 8.png",
  //   },
  //   {
  //     name: "Kevin Anderson",
  //     gender: "Male",
  //     age: 30,
  //     src: "./src/assets/HealthCareDashboard/Layer 9.png",
  //   },
  //   {
  //     name: "Dylan Thompson",
  //     gender: "Male",
  //     age: 36,
  //     src: "./src/assets/HealthCareDashboard/Layer 10.png",
  //   },
  //   {
  //     name: "Nathan Evans",
  //     gender: "Male",
  //     age: 42,
  //     src: "./src/assets/HealthCareDashboard/Layer 7.png",
  //   },
  // ];

  const updateSearchResult = () => {
    let searchedPatients = [];

    if (searchInput.length > 0) {
      searchedPatients = patients.filter((country) => {
        // return (
        //   country.name.match(searchInput) ||
        //   country.continent.match(searchInput)
        // );

        return country.name.toLowerCase().includes(searchInput.toLowerCase());
      });
    } else if (searchInput.length == 0) {
      searchedPatients = patients;
    }

    setSearchResult(searchedPatients);
  };

  useEffect(() => {
    updateSearchResult();
  }, [searchInput, patients]);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Patients</h1>
        {/* <span className="search-icon">🔍</span> */}
        <input
          type="search"
          placeholder="Search here"
          onChange={handleChange}
          value={searchInput}
        />
      </div>

      <div className="patient-list">
        {searchResult.map((patient) => (
          <div
            key={patient.name}
            className={`patient-card ${
              patient.name === selectedPatient ? "selected" : ""
            }`}
            onClick={() => setSelectedPatient(patient.name)}
          >
            <div className="patient-info">
              <img src={patient?.src} alt={patient.name} className="avatar" />
              <div className="text-info">
                <span className="name">{patient.name}</span>
                <span className="details">
                  {patient.gender}, {patient.age}
                </span>
              </div>
            </div>
            <button className="menu-button">⋮</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientList;
