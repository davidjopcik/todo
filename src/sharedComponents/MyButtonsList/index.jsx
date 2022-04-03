import React from "react";
import MyButton from "../MyButton";

export default  function MyButtonsList({buttonsCount, disableCounters}) {
    const buttons = Array(buttonsCount).fill("")

    
    return buttons.map(i => <MyButton buttonName="Tlačítko" disableCounter={disableCounters} />)
}