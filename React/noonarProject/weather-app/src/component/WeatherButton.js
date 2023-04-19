import React from "react";
import { Button } from 'react-bootstrap';

const WeatherButton = ({ cities, selectedCity, handleCityChange }) => {
    // console.log(cities);

    return (
        <div className='weather-btn-box'>
            <Button variant={`${selectedCity == null ? "outline-warning" : "warning"}`} onClick={() => handleCityChange("current")} >
                Current Location
            </Button>
            {cities.map((city, index) => (
                <Button variant={`${selectedCity == city ? "outline-warning" : "warning"}`} key={index} onClick={() => handleCityChange(city)} >
                    {city}
                </Button>
            ))}
        </div>
    );
};

export default WeatherButton;