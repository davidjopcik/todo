import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignInForm() {
    const navigate = useNavigate()
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  return (
    <div>
      <input
        placeholder="Užívateľské meno"
        onChange={function (event) {
          setUsername(event.target.value);
        }}
      />
      <input
        placeholder="Heslo"
        type="password"
        onChange={function (event) {
          setPassword(event.target.value);
        }}
      />
      Zapamatuj si ma
      <input
        type="checkbox"
        onChange={function (event) {
          setRemember(event.target.checked);
        }}
      />
      <button
        onClick={function () {
          /* fetch("http://localhost:3001/signin", {
            method: "POST",
            body: {
              userName,
              password,
            },
          })
          .then(response => { }) //Úspešné prihlásenie
          .catch(response => { }) //Neúspešné prihlásenie */
          navigate("/")
        }}
      >
        Prihlásiť sa
      </button>
    </div>
  );
}
