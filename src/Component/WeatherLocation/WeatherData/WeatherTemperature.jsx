import React from 'react';
import './index.css';

const WeatherTemperature = ({ temperature, icon = '' }) => {

    return ( 
        <div className="weatherDataTemperature">
            {icon ? <img src = {`https://openweathermap.org/img/w/${icon}.png`} alt="weathericon" width="50%"/> : null}
            <p><span className="temperature">{temperature}</span><span>°C</span></p>
        </div> 
    );
}
 
export default WeatherTemperature;