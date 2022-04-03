import React, { useState } from "react";
import DisplayWeather from "./DisplayWeather";
import { isEmpty } from "./validations";
import "./styles.css"


export default function Weather() {
  const [weatherData, setWeatherData] = useState();
  const [formData, setFormData] = useState({
    city: "",
    country: "",
  });
  const [errorMessage, setErrorMessage] = useState();

  function loadweather() {
    if (isEmpty(formData.city) || !isNaN(formData.city)) {
      setErrorMessage("Vyplň mesto");
      return;
    }
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${formData.city},${formData.country}&appid=86d5e1d08dc16532df94b4f5ce697faf`
    )
      .then((response) => response.json())
      .then((responseData) => {
        if (responseData.cod === 200) {
          setWeatherData(responseData);
        } else {
          alert("Lokace nebola nájdena!");
        }
      })
      .catch((error) => alert("server nie je momentálne dostupný"));
  }

  return (
    <div className="all">
      <h1>WEATHER APP</h1>
      <input
        className="m-2"
        type="text"
        placeholder={errorMessage ? errorMessage : "City"}
        onChange={(e) =>
          setFormData({
            ...formData,
            city: e.target.value,
          })
        }
      />
      <input
        className="m-2"
        type="text"
        placeholder="Country"
        onChange={(e) =>
          setFormData({
            ...formData,
            country: e.target.value,
          })
        }
      />
      <button onClick={() => loadweather()}>Submit</button>

      {errorMessage && <p className="text-danger"> {errorMessage} </p>}
      {weatherData && <DisplayWeather data={weatherData} />}
    </div>
  );
}
