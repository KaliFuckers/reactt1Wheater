import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types'
import './index.css';


const styles = {
    root:{
        display: 'flex'
    },
    
  };

const WeatherData = (props) => {
    const {data : {temperature, weatherState, humidity, wind, icon }} = props;
    const { classes } = props;
    return (
        <div className={classes.root}> 
            <div className="weatherDataCont">
                <WeatherTemperature temperature={temperature} weatherState={weatherState} icon={icon}/>
                <WeatherExtraInfo humidity={humidity} wind={wind}/>   
            </div>
        </div>
    );
}
 
WeatherData.propType = {
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired
    })
}
export default withStyles(styles)(WeatherData);