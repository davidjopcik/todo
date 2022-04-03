import React from "react";

export default function DisplayWeather({data}) {
        console.log(data);
        
    return(
        <div >
            <h2>
            {data.name}, {data.sys.country}
            </h2>
            <h3>
                
            <p>{new Date().toLocaleDateString()}</p>
            </h3>
            <h1>
                {Math.round(data.main.temp - 273.15) +  " °C"}
            </h1>
        </div>
    )
}