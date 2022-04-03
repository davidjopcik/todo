import React, { useEffect, useState } from "react";

function getJokoe() {
  return fetch("https://api.chucknorris.io/jokes/random", {
    method: "GET",
  });
}

export default function Joke() {
  const [iconUrl, setIconUrl] = useState();
  const [joke, setJoke] = useState("");

  useEffect(function() {
    getJokoe().then((response) => {
      response.json().then((data) => {
        setJoke(data.value);
        setIconUrl(data.icon_url);
      });
    })
    .catch(() => setJoke("Nedajú sa načítať dáta"))
  }, []);

  return (
    <div>
      {iconUrl && <img src={iconUrl} />}
      {joke}
    </div>
  );
}
