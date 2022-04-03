import React, { useState } from "react";

export default function MyButton({ buttonName, color, disableCounter }) {
  const [counter, setCounter] = useState(0);
  const [showText, setShowtext] = useState(true);
  return (
    <div>
      <button
        onClick={() => {
          setCounter(counter + 1);

          setShowtext(!showText)
          /* setShowtext(showText ? false : true)
          showText ? setShowtext(false) : setShowtext(true)
          if (showText === true) {
            setShowtext(false);
          }else {
              setShowtext(true)
          } */
        }}
        style={{ backgroundColor: color }}
      >
        {buttonName}
      </button>
      {disableCounter === true && <div>Počet klikov: {counter}</div>}
    </div>
  );
}
