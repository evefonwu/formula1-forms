import React, { useState, useRef } from "react";
import { assert, object, string, length } from "superstruct";
import { messageWith } from "./inputValidations";

const ConstructorStruct = object({
  constructorref: length(string(), 1, 36),
  name: length(string(), 1, 36),
  nationality: length(string(), 1, 36),
});

function CreateConstructor(props) {
  const [message, setMessage] = useState({});
  const constructorrefInput = useRef(null);
  const nameInput = useRef(null);
  const nationalityInput = useRef(null);

  const collectedData = () => {
    const form = {
      constructorref: constructorrefInput.current.value,
      name: nameInput.current.value,
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
      const structure = ConstructorStruct;
      assert(data, structure);
      console.log("Structure validated");
    } catch (structureErrors) {
      console.log("There are Superstruct errors; add messages");
      messageWith(structureErrors, setMessage);
    }
  };

  return (
    <div className="container">
      <h3 className="section-title">F1 Constructor</h3>
      <form onSubmit={handleSubmit} className="form constructor-form">
        <input
          type="text"
          name="constructorref"
          ref={constructorrefInput}
          placeholder="Constructor Ref #"
        />
        {message.constructorref && (
          <span className="error-message">{message.constructorref}</span>
        )}
        <input
          type="text"
          name="name"
          ref={nameInput}
          placeholder="Constructor Name"
        />
        {message.name && <span className="error-message">{message.name}</span>}
        <input
          type="text"
          name="nationality"
          ref={nationalityInput}
          placeholder="Constructor Nationality"
        />
        {message.nationality && (
          <span className="error-message">{message.nationality}</span>
        )}
        <button type="submit" className="submit-button">
          Add Constructor
        </button>
      </form>
    </div>
  );
}

export default CreateConstructor;
