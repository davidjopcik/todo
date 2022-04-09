import React, {useState} from "react";

export default function TodoTest() {

    const [text, setText] = useState("")

    return(
        <>
        <div>
            <h1>Testtodo</h1>
            <input type="text" className="form-control" 
            onChange={(e) => console.log(e.target.value)}
            />
        </div>
        </>
    )
}