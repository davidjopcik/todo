import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export default function SearchFilter({ values }) {
  let [inputValue, setInputValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("filter"));
  const defaultValue = searchParams.get("filter");

  useEffect(function () {
      setInputValue(defaultValue);
    },
    [defaultValue]
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        defaultValue={defaultValue}
        onChange={function (event) {
          setInputValue(event.target.value);
        }}
      />
      ​
      <ul className="search">
        {values
          .filter((el) => el.toLowerCase().includes(inputValue.toLowerCase()))
          .map((item, index) => (
            <li key={index}> {item} </li>
          ))}
      </ul>
    </div>
  );
}
