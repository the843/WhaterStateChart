async function getWeather() {
  try {
    const res = await fetch("https://api.open-meteo.com/v1/forecast?latitude=34.02&longitude=-6.83&hourly=temperature_2m");
    const data = await res.json();
    
    const hour = data.hourly.time[0];
    const temperature = data.hourly.temperature_2m[0];
    
    const weatherData = {
      hour,
      temperature
    };
    
    return weatherData;  
  } catch (err) {
    console.error(err);
  }
}


getWeather().then(weatherData => {
  var wh =weatherData.hour   ;
  var wt = weatherData.temperature ;
  console.log(`الساعة: ${wh}, درجة الحرارة: ${wt}°C`);
});

