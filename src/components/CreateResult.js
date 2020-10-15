import React, { useState, useRef } from "react";
import { assert, object, string, length, number } from "superstruct";
import { messageWith } from "./inputValidations";

const ResultStruct = object({
  raceId: number(),
  constructorId: number(),
  driverId: number(),
  position: number(),
  points: number(),
  laps: number(),
  time: length(string(), 1, 36),
});

function CreateResult(props) {
  const [message, setMessage] = useState({});
  const raceIdInput = useRef(null);
  const constructorIdInput = useRef(null);
  const driverIdInput = useRef(null);
  const positionInput = useRef(null);
  const pointsInput = useRef(null);
  const lapsInput = useRef(null);
  const timeInput = useRef(null);

  const collectedData = () => {
    const form = {
      raceId: parseInt(raceIdInput.current.value),
      constructorId: parseInt(constructorIdInput.current.value),
      driverId: parseInt(driverIdInput.current.value),
      position: parseInt(positionInput.current.value),
      points: parseInt(pointsInput.current.value),
      laps: parseInt(lapsInput.current.value),
      time: timeInput.current.value,
    };
    return form;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage({});
    try {
      const data = collectedData();
      const structure = ResultStruct;
      assert(data, structure);
      console.log("Structure validated");
    } catch (structureErrors) {
      console.log("There are Superstruct errors; add messages");
      messageWith(structureErrors, setMessage);
    }
  };

  return (
    <div className="container">
      <h3 className="section-title">F1 Result</h3>
      <form onSubmit={handleSubmit} className="form result-form">
        <input
          type="number"
          name="raceId"
          ref={raceIdInput}
          placeholder="Race menu"
        />
        {message.raceId && (
          <span className="error-message">{message.raceId}</span>
        )}
        <input
          type="number"
          name="constructorId"
          ref={constructorIdInput}
          placeholder="Constructor menu"
        />
        {message.constructorId && (
          <span className="error-message">{message.constructorId}</span>
        )}
        <input
          type="number"
          name="driverId"
          ref={driverIdInput}
          placeholder="Driver menu"
        />
        {message.driverId && (
          <span className="error-message">{message.driverId}</span>
        )}
        <input
          type="number"
          name="position"
          ref={positionInput}
          placeholder="Position"
        />
        {message.position && (
          <span className="error-message">{message.position}</span>
        )}
        <input
          type="number"
          name="points"
          ref={pointsInput}
          placeholder="Points"
        />
        {message.points && (
          <span className="error-message">{message.points}</span>
        )}
        <input type="number" name="Laps" ref={lapsInput} placeholder="Laps" />
        {message.laps && <span className="error-message">{message.laps}</span>}

        <input type="text" name="time" ref={timeInput} placeholder="Time" />
        {message.time && <span className="error-message">{message.time}</span>}

        <button type="submit" className="submit-button">
          Add Race Result
        </button>
      </form>
    </div>
  );
}

export default CreateResult;
