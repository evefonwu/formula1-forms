import React, { useState, useRef } from "react";
import { assert, object, string, length, number } from "superstruct";
import { messageWith } from "./inputValidations";

const DriverStruct = object({
  driverRef: length(string(), 1, 36),
  number: number(),
  code: length(string(), 1, 36),
  forename: length(string(), 2, 36),
  surname: length(string(), 2, 36),
  dob: length(string(), 1, 36), //date(),
  nationality: length(string(), 2, 36),
});

function CreateDriver(props) {
  const [message, setMessage] = useState({});
  const driverRefInput = useRef(null);
  const numberInput = useRef(null);
  const codeInput = useRef(null);
  const forenameInput = useRef(null);
  const surnameInput = useRef(null);
  const dobInput = useRef(null);
  const nationalityInput = useRef(null);

  const collectedData = () => {
    const form = {
      driverRef: driverRefInput.current.value,
      number: parseInt(numberInput.current.value),
      code: codeInput.current.value,
      forename: forenameInput.current.value,
      surname: surnameInput.current.value,
      dob: dobInput.current.value,
      nationality: nationalityInput.current.value,
    };
    console.log(form);
    return form;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage({});
    try {
      const data = collectedData();
      const structure = DriverStruct;
      assert(data, structure);
      console.log("Structure validated");
    } catch (structureErrors) {
      console.log("There are Superstruct errors; add messages");
      messageWith(structureErrors, setMessage);
    }
  };

  return (
    <div className="container">
      <h3 className="section-title">F1 Driver</h3>
      <form onSubmit={handleSubmit} className="form driver-form">
        <input
          type="text"
          name="driverRefInput"
          ref={driverRefInput}
          placeholder="Driver Ref #"
        />
        {message.driverRef && (
          <span className="error-message">{message.driverRef}</span>
        )}
        <input
          type="number"
          name="number"
          ref={numberInput}
          placeholder="Driver Number"
        />
        {message.number && (
          <span className="error-message">{message.number}</span>
        )}
        <input
          type="text"
          name="code"
          ref={codeInput}
          placeholder="Driver Code"
        />
        {message.code && <span className="error-message">{message.code}</span>}
        <input
          type="text"
          name="forename"
          ref={forenameInput}
          placeholder="Forename"
        />
        {message.forename && (
          <span className="error-message">{message.forename}</span>
        )}
        <input
          type="text"
          name="surname"
          ref={surnameInput}
          placeholder="Surname"
        />
        {message.surname && (
          <span className="error-message">{message.surname}</span>
        )}
        <input
          type="text"
          name="dob"
          ref={dobInput}
          placeholder="Date of Birth"
        />
        {message.dob && <span className="error-message">{message.dob}</span>}
        <input
          type="text"
          name="nationality"
          ref={nationalityInput}
          placeholder="Nationality"
        />
        {message.nationality && (
          <span className="error-message">{message.nationality}</span>
        )}
        <button type="submit" className="submit-button">
          Add Driver
        </button>
      </form>
    </div>
  );
}

export default CreateDriver;
