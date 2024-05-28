import React, { useContext, useEffect, useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import { context } from "../App";

const Approvers = [
  { value: "one", label: "one" },
  { value: "two", label: "two" },
  { value: "three", label: "three" },
  { value: "four", label: "four" },
  { value: "five", label: "five" },
];

function PayConfig() {
  const {
    selectedApprovers,
    setSelectedApprovers,
    setModal,
    currentStep,
    steps,
    setFinalAppr,
  } = useContext(context);
  const [level, setLevel_] = React.useState(
    localStorage.getItem("Level") ? localStorage.getItem("Level") : 1
  );
  const setLevel = (level) => {
    setLevel_(level);
    localStorage.setItem("level", level);
  };
  const handleSelect = (selectedList, index) => {
    const presentList = [...selectedApprovers];
    presentList[index] = selectedList;
    setSelectedApprovers(presentList);
  };
  return (
    <div className="pay">
      Pay Configuration
      {selectedApprovers.map((selected, i) => (
        <div style={{ margin: "10px" }}>
          <MultiSelect
            display="chip"
            options={Approvers}
            value={selected}
            onChange={(sl) => {
              handleSelect(sl, i);
            }}
            labelledBy="Select"
            overrideStrings={{ "selectSomeItems": "Select Approvers..."}}
            isCreatable={true}
            isMulti={true}
          />
        </div>
      ))}
      <a
        href="#"
        onClick={() => {
          setLevel(level + 1);
          setSelectedApprovers([...selectedApprovers, []]);
        }}
      >
        Add Level
      </a>
      <a
        href="#"
        style={{ float: "right" }}
        onClick={() => {
          console.log(level);
          if (level > 1) {
            console.log("here");
            const updatedValues = [
              ...selectedApprovers.slice(0, selectedApprovers.length - 1),
            ];
            setSelectedApprovers(updatedValues);
            return setLevel(level - 1);
          }
        }}
      >
        Remove Level
      </a>
      <br />
      <br />
      <button
        onClick={() => {
          setModal(true);

          let flattenArr = selectedApprovers.flat();

          const newArr = [];
          flattenArr.forEach((i) => {
            if (
              !newArr.find((j) => {
                return j.value === i.value;
              })
            ) {
              newArr.push(i);
            }
          });

          setFinalAppr(newArr);
        }}
        disabled={
          selectedApprovers.length === 0 && currentStep === steps.length - 1
        }
      >
        Finish
      </button>
    </div>
  );
}

export default PayConfig;
