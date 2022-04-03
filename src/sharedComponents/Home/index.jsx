import React, {useContext}   from "react";
import { Link } from "react-router-dom";
import Joke from "../../Joke";
import { ThemeContext } from "../../context/ThemeContext";

export default function Home() {
const themeContext = useContext(ThemeContext)

console.log(themeContext);

  return (
    <div>
      This is a home page
      <Link to="/news">Go to News</Link>
      <br />
      <Joke />
      <br />
    </div>
  );
}
