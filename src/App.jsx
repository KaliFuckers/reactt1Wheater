import React, { Component, Fragment } from 'react';
import WeatherLocation from './Component/WeatherLocation';
import { AppBar, Toolbar, IconButton, Typography, Button, withStyles, Grid, Paper } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import './App.css';

const list = {
  coro:{
    ciudad: 'Coro',
    pais: 've',
    descripcion: 'Coro, la capital del estado Falcón. Muy famoso por sus parque de arena Los Medanos y es una referencia tanto por el turismo local, tanto por el turismo internacional'
  },
  caracas:{
    ciudad: 'Caracas',
    pais: 've',
    descripcion: 'Caracas el la capital del estado venezolano cuyo el actual presidente es Nicolás Maduro Moros. '
  },
  bogota:{
    ciudad: 'Bogotá',
    pais: 'co',
    descripcion: 'Bogotá es la capital del estado colombiano, cuyo presidente actual es Yvan Duque'
  }
}

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  rootPaper:{
    height: '90vh'
  }
}

class App extends Component {

  handleInfo = (city) => {
    console.log(city);
  }

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <AppBar position="fixed">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <Menu />
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex}>
            WeatherApp
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
        <div className="App">
          <Grid container>
            <Grid item xs={12} sm={6} className="leftPane">
              {
                Object.entries(list).map(([obj, city]) => (
                  <WeatherLocation key = {obj} city={city} datoClick = {this.handleInfo}/>
                ))
              }
            </Grid>
            <Grid item xs={12} sm={6}>
                <Paper className={classes.rootPaper} elevation={4}>
                  <div className="detail">
                    Shammael
                  </div>
                </Paper>
            </Grid>
          </Grid>
        </div>
    </Fragment>
    );
  }
}

export default withStyles(styles)(App);
