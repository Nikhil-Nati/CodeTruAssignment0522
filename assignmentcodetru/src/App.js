import { Routes, Route } from "react-router";
import React, { createContext, useState } from "react";
import "./App.css";
import LeftNavBar from "./Components/LeftNavBar";
import GenerateDetails from "./Components/GenerateDetails";
import Generatedetails1 from "./Components/Generatedetails1";
import GenerateDetails2 from "./Components/GenerateDetails2";
import Address from "./Components/Address";
import PayConfig from "./Components/PayConfig";
import { useNavigate } from "react-router-dom";
import trophy from "./Resources/trophy.jpg";
import Profile from "./Components/Profile";
import ProgressBar from "./Components/ProgressBar";
import Progress from "./Components/Progress";
import Modal from "./Components/Modal";

export const context = createContext();

function App() {
  const nav = useNavigate();
  const [Name, setName_] = useState(
    localStorage.getItem("Name") ? localStorage.getItem("Name") : ""
  );
  const [modal, setModal] = useState(false);
  const [dob, setDob_] = useState(
    localStorage.getItem("dob") ? localStorage.getItem("dob") : ""
  );
  const [mobile, setMobile_] = useState(
    localStorage.getItem("mobile") ? localStorage.getItem("mobile") : ""
  );
  const [email, setEmail_] = useState(
    localStorage.getItem("email") ? localStorage.getItem("email") : ""
  );
  const [addresses, setAddresses_] = useState(
    localStorage.getItem("addresses")
      ? JSON.parse(localStorage.getItem("addresses"))
      : []
  );
  const [selectedApprovers, setSelectedApprovers_] = useState(
    localStorage.getItem("selectedApprovers")
      ? JSON.parse(localStorage.getItem("selectedApprovers"))
      : [
          [
            { value: "one", label: "one" },
            { value: "two", label: "two" },
          ],
        ]
  );
  const [currentStep, setCurrentStep_] = useState(
    localStorage.getItem("currentStep")
      ? parseInt(localStorage.getItem("currentStep"))
      : 0
  );
  const [steps, useSteps_] = useState(
    localStorage.getItem("steps")
      ? JSON.parse(localStorage.getItem("steps"))
      : ["General Details", "Address", "Pay Configuration"]
  );
  const setName = (Name) => {
    setName_(Name);
    localStorage.setItem("Name", Name);
  };
  // const setModal = (modal)=>{
  //   setModal_(modal);
  //   localStorage.setItem('modal',modal);
  // }
  const setDob = (dob) => {
    setDob_(dob);
    localStorage.setItem("dob", dob);
  };
  const setMobile = (mobile) => {
    setMobile_(mobile);
    localStorage.setItem("mobile", mobile);
  };
  const setEmail = (email) => {
    setEmail_(email);
    localStorage.setItem("email", email);
  };
  const setAddresses = (addresses) => {
    setAddresses_(addresses);
    localStorage.setItem("addresses", JSON.stringify(addresses));
  };
  const setSelectedApprovers = (selectedApprovers) => {
    setSelectedApprovers_(selectedApprovers);
    localStorage.setItem(
      "selectedApprovers",
      JSON.stringify(selectedApprovers)
    );
  };
  const setCurrentStep = (currentStep) => {
    setCurrentStep_(currentStep);
    localStorage.setItem("currentStep", currentStep);
  };
  const useSteps = (steps) => {
    useSteps_(steps);
    localStorage.setItem("steps", JSON.stringify(steps));
  };
  const [finalAppr, setFinalAppr] = useState([]);

  return (
    <context.Provider
      value={{
        Name,
        setName,
        dob,
        setDob,
        mobile,
        setMobile,
        email,
        setEmail,
        addresses,
        setAddresses,
        selectedApprovers,
        setSelectedApprovers,
        nav,
        modal,
        setModal,
        currentStep,
        setCurrentStep,
        steps,
        useSteps,
        finalAppr,
        setFinalAppr,
      }}
    >
      <div className="modalDiv" style={{ display: modal && "block" }}></div>
      <div className="grid-container ">
        <div className="grid-item1">
          <LeftNavBar />
        </div>
        <div className="grid-item2 flex-item">
          <div>
            <input
              type="text"
              placeholder="Search or Jump to "
              className="input"
            ></input>
            <span className="material-symbols-outlined spanButton">search</span>
          </div>
          <div>
            <Progress />
          </div>{" "}
        </div>
        <div className="grid-item3">
          <Routes>
            <Route path="/" element={<GenerateDetails />}>
              <Route path="/" element={<Generatedetails1 />} />
              <Route path="GenerateDetails2" element={<GenerateDetails2 />} />
            </Route>
            <Route path="Address" element={<Address />} />
            <Route path="Pay" element={<PayConfig />} />
          </Routes>
        </div>
        <div className="grid-item4">
          <Profile />
        </div>
      </div>
      <Modal/>
    </context.Provider>
  );
}

export default App;
