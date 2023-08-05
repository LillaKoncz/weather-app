import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { fetchWeatherData } from './meteo';
import  background  from './assets/images/background-sky.jpg'
import {Time} from './Time';


function App() {
 const [weather, setWeather] = useState();


useEffect(() => {

  fetchWeatherData().then((data) => {
    setWeather(data);
  })
  .catch((error) => {
    console.error(error);
  });

},[]);


if(!weather) {
  return <div> Loading ...</div>;
}


// weather infos
const currentWeather = weather["current_weather"];
const currentTemperature = currentWeather["temperature"];
const currentWindspeed = currentWeather["windspeed"];



  return (
   <div className='background p-5'>
        <div className='place m-3 display-5'>Weather App</div>
        <div className='present-time m-5 display-4 '><Time/></div>
        <div className='temperature my-5'>{currentTemperature} C°</div>
        <div className='wind my-5'> Windspeed : {currentWindspeed} m/s</div>
        
   </div>
  )
}

export default App
