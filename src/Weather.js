import React, { useState } from "react";
import axios from 'axios';

export default function Weather() {
    let [city, showCity] = useState("");
    let [header, showHeader] = useState("");
    let [temp, showTemp] = useState(null);
    let [description, showDescriotion] = useState("");
    let [humidity, showHumidity] = useState("");
    let [icon, showIcon] = useState("");

    function showTemperature(responce) {
    console.log(responce.data);
    showHeader(city);
    showTemp(`Temperature: ${Math.round(responce.data.main.temp)}°C`);
    showDescriotion(`Description: ${responce.data.weather[0].description}`);
    showHumidity(`Humidity: ${responce.data.main.humidity}%`);
    showIcon(
    `https://openweathermap.org/img/wn/${responce.data.weather[0].icon}@2x.png`
    );
    }

    function Search(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=26310790c7af07b3a6f2f1bf2272d7f2&units=metric`;
    axios.get(url).then(showTemperature);
    }

    function getCity(event) {
    showCity(event.target.value);
    }

    return (
    <div className="Weather">
        <h2>Type the city</h2>
        <form onSubmit={Search}>
        <input type="search" onChange={getCity} />
        <input type="submit" />
        </form>
        <h1>{header}</h1>
        <p>{temp}</p>
        <p>{description}</p>
        <p>{humidity}</p>
        <img src={icon} alt="" />
    </div>
    );
}