import React, { useState, useRef } from "react";
import {
  assert,
  object,
  number,
  string,
  length,
  optional,
  date,
} from "superstruct";
import { messageWith } from "./inputValidations";

const RaceStruct = object({
  year: number(),
  round: number(),
  circuitId: optional(number()),
  name: length(string(), 1, 36),
  date: length(string(), 1, 36), //date(),
  time: length(string(), 1, 36),
});

function CreateRace(props) {
  const [message, setMessage] = useState({});
  const yearInput = useRef(null);
  const roundInput = useRef(null);
  const nameInput = useRef(null);
  const dateInput = useRef(null);
  const timeInput = useRef(null);

  const collectedData = () => {
    const form = {
      year: parseInt(yearInput.current.value),
      round: parseInt(roundInput.current.value),
      name: nameInput.current.value,
      date: dateInput.current.value,
      time: timeInput.current.value,
    };
    console.log(form);
    return form;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage({});
    try {
      const data = collectedData();
      const structure = RaceStruct;
      assert(data, structure);
      console.log("Structure validated");
    } catch (structureErrors) {
      console.log("There are Superstruct errors; add messages");
      messageWith(structureErrors, setMessage);
    }
  };

  return (
    <div className="container">
      <h3 className="section-title">F1 Race</h3>
      <form onSubmit={handleSubmit} className="form race-form">
        <input
          type="number"
          name="yearInput"
          ref={yearInput}
          placeholder="Year"
        />
        {message.year && <span className="error-message">{message.year}</span>}
        <input
          type="number"
          name="round"
          ref={roundInput}
          placeholder="Round"
        />
        {message.round && (
          <span className="error-message">{message.round}</span>
        )}
        <input type="text" name="name" ref={nameInput} placeholder="Name" />
        {message.name && <span className="error-message">{message.name}</span>}
        <input type="text" name="date" ref={dateInput} placeholder="Date" />
        {message.date && <span className="error-message">{message.date}</span>}
        <input type="text" name="time" ref={timeInput} placeholder="Time" />
        {message.time && <span className="error-message">{message.time}</span>}
        <button type="submit" className="submit-button">
          Add Race
        </button>
      </form>
    </div>
  );
}

export default CreateRace;
