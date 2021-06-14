import React, { Component } from 'react';
import style from "./app.module.css";


const api_key = "bbf619c16870c7aa052f3f83109bba96";
export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
          some : ""    
    }
  }
  getWeather = async () => {
    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.state.newcity ? this.state.newcity: "Rabat"}&appid=${api_key}`
    );
    const response = await api_call.json();
    console.log(response)
    }

  render() {
    return (
      <div className={style.container}>

      </div>
    )
  }
}