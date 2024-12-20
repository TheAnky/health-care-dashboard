import React from "react";
import "./ProfileCard.css";

const ProfileCard = ({ selectedPatientData }) => {
  return (
    <div className="profile-card">
      <div className="profile-image">
        <img src={selectedPatientData?.profile_picture} alt="Jessica Taylor" />
      </div>
      <div className="profile-details">
        <h2>{selectedPatientData?.name}</h2>
        <div className="info">
          <img src="./src/assets/HealthCareDashboard/BirthIcon.svg" alt="" />
          <p>Date of Birth: {selectedPatientData?.date_of_birth}</p>
        </div>
        <div className="info">
          <img src="./src/assets/HealthCareDashboard/FemaleIcon.svg" alt="" />
          <p>Gender: {selectedPatientData?.gender}</p>
        </div>

        <div className="info">
          <img src="./src/assets/HealthCareDashboard/PhoneIcon.svg" alt="" />
          <p>Contact Info: {selectedPatientData?.phone_number}</p>
        </div>
        <div className="info">
          <img src="./src/assets/HealthCareDashboard/PhoneIcon.svg" alt="" />
          <p>Emergency Contacts: {selectedPatientData?.emergency_contact}</p>
        </div>
        <div className="info">
          <img
            src="./src/assets/HealthCareDashboard/InsuranceIcon.svg"
            alt=""
          />
          <p>Insurance Provider: {selectedPatientData?.insurance_type}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
