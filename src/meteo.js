 const apiUrl = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m";


 export const fetchWeatherData = async () => {
  const response = await fetch(apiUrl);
  if(!response.ok){
    throw new Error('Error');
  }
  return await response.json();
}








