import React, {useState} from "react";

export default function Todo() {
    const [item, setItem] = useState("");

    return(
        <div className="d-flex justify-content-center">
        <div >
            <h1 className="mb-5">Todo List</h1>
            <h5>Add todo</h5>
            <input type="text" placeholder="Add new todo" />
            <button
            
            >Submit</button>
        </div>
        </div>
    )

}