import React, { Component } from "react";
import "./index.css";
import WeatherData from "./WeatherData";
import {
  CircularProgress,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  withStyles,
  Grid
} from "@material-ui/core";
import coro from "./img/coro.jpg";
import Location from "./WeatherData/Location";
import ReactCountryFlag from "react-country-flag";

const styles = {
  card: {
    minWidth: 275,
    width: "100%",
    margin: "auto",
    minHeight: 200,
    maxWidth: 500
  },
  imgClass: {
    height: "400px",
    width: "100%"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  pos: {
    marginBottom: 12
  },
  cirPro: {
    display: "flex",
    justifyContent: "center"
  },
  flagSVG: {
    fontSize: "8em",
    display: "none"
  }
};

class WeatherLocation extends Component {
  state = {
    city: "",
    data: null,
    info: false,
    urlApi: ""
  };

  handleClick = urlApi => {
    fetch(urlApi)
      .then(data => data.json())
      .then(data => {
        const data1 = {
          temperature: data.list[0].main.temp,
          humidity: data.list[0].main.humidity,
          wind: data.list[0].wind.speed,
          weatherState: data.list[0].weather[0].description,
          icon: data.list[0].weather[0].icon,
          idIcon: data.list[0].weather[0].id,
          country: data.city.country
        };
        return this.setState({
          data: data1
        });
      })
      .catch(() => console.log("Location not found"));
  };

  componentDidMount() {
    const { ciudad } = this.props.city;
    const { pais } = this.props.city;
    const key = "8d6f54f9b11d7b45c1889a8866a47227";
    const urlApi = `https://api.openweathermap.org/data/2.5/forecast?q=${ciudad},${pais}&appid=${key}&units=metric`;
    this.handleClick(urlApi);
  }

  getWeatherState(b) {
    const { data } = this.state;
    if (data) {
      return (b = data.weatherState);
    } else {
      return (b = "");
    }
  }

  handleLocationClick = data => {
    this.props.datoClick(data);
  };

  render() {
    const { data, info } = this.state;
    const city = this.props.city.ciudad;
    const { pais } = this.props.city;
    let b = undefined;
    const { classes } = this.props;
    const weatherState = this.getWeatherState(b);
    return (
      <div>
        <div className="weatherLocationCont">
          <Card className={classes.card}>
            <CardContent>
              <Grid container>
                <Grid item xs={6}>
                  <Location city={city} />
                </Grid>
                <Grid item xs={6}>
                  <ReactCountryFlag
                    code={pais}
                    svg
                    styleProps={{
                      fontSize: "3em"
                    }}
                  />
                </Grid>
              </Grid>
              {data ? (
                <div>
                  <Typography variant="headline" component="h2">
                    {weatherState}
                  </Typography>
                  <WeatherData data={data} />
                  {info ? (
                    <Typography component="div">
                      <br />
                      <img src={coro} alt="coro" className={classes.imgClass} />
                    </Typography>
                  ) : null}
                  <CardActions>
                    <Button
                      color="secondary"
                      variant="raised"
                      size="small"
                      onClick={() => this.handleLocationClick(city)}
                    >
                      Más sobre {city}
                    </Button>
                  </CardActions>
                </div>
              ) : (
                <div className={classes.cirPro}>
                  <CircularProgress size={50} />
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(WeatherLocation);
