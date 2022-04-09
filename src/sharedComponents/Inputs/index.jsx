import React, { useState } from "react";

export default function Inputs() {
  const [value, setValue] = useState("");
  const [input, setInput] = useState([]);
  const [status, setStatus] = useState(false);
  
  const validate = () => {
    const inputStatus = [...input];

    inputStatus.push({
      text: value,
      status: status,
    });
    setInput(inputStatus);

    console.log(value);
    console.log(inputStatus);
  };

  return (
    <>
      <div>
        <h1 className="text-center">Input types</h1>
      </div>
      <div className="border p-2 m-2">
        <h3>String input</h3>
        <input
          type="text"
          className="form-label"
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div className="border p-2 m-2">
        <h3>Date input</h3>
        <input type="date" onChange={(e) => setValue(e.target.value)} />
      </div>

      <div className="border p-2 m-2">
        <h3>Radio input</h3>
        <input type="radio" onChange={(e) => setValue(e.target.value)} />
        <label htmlFor="" className="pl-2">
          option 1
        </label>
        <br />

        <input type="radio" onChange={(e) => setValue(e.target.value)} />
        <label htmlFor="" className="pl-2">
          option 1
        </label>
        <br />
      </div>

      <div className="border p-2 m-2">
        <h3>Chceckbox input</h3>

        <input
          type="checkbox"
          name="Value 1"
          id=""
          onChange={() => setStatus(true)}
        />
        <label htmlFor="" className="pl-2 pr-2">
          Value 1
        </label>
        <input type="checkbox" name="Value 2" id="" />
        <label htmlFor="" className="pl-2 pr-2">
          Value 1
        </label>
        <input type="checkbox" name="Value 3" id="" />
        <label htmlFor="" className="pl-2 pr-2">
          Value 1
        </label>
      </div>

      <button className="btn btn-primary m-2 p-2" onClick={validate}>
        Submit
      </button>
    </>
  );
}
