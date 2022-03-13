import React, {useState} from "react";

export default function MyButton({ text, btnNumber, counter }) {
    const [activeItem, setActiveItem] = useState(counter);
  return (
      <div>
    <button
      onClick={() => {
        setActiveItem(counter = +1)
        
        window.alert("Na tlačítko" + btnNumber + "bolo kliknuté"); 
      }}
    >
      {text}
    </button>
    <div>
      Počet klikov: {counter}
    </div>
    </div>
  );
}
