import React from 'react';
import './index.css';

const WeatherExtraInfo = ({ humidity, wind }) => {
    return ( 
        <div className="weatherExtraInfo">
            <span className="extraInfoHumidity">{`Humidity : ${humidity} %`}</span>
            <span>{`Wind: ${wind} m/s`}</span>
        </div>
     );
}
 
export default WeatherExtraInfo;