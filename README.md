# Weather State Chart 🌦️

A simple and **professional web application** that visualizes **24-hour temperature forecasts** for Moroccan cities using the [Open-Meteo API](https://open-meteo.com/) and [Plotly.js](https://plotly.com/javascript/), with **interactive map markers** for selecting cities.  

## Features ✨
- Fetches hourly weather data (temperature in °C) for **all major Moroccan cities**.  
- Interactive **bar or line chart** showing **24 hours of temperature variation**.  
- Temperatures **above 30°C** are displayed in **red**, otherwise in **blue**.  
- Input field to select a city by entering its **index number (1–21)**.  
- Interactive **Leaflet.js map** with markers for each city; click a marker to view its weather chart.  
- Default chart loads the weather for **Rabat**.  
- Clean **Dark Mode dashboard design** with smooth animations for cards and charts.  
- Logs the **current hour & temperature** in the console.  

## Live Demo 🚀
👉 [Try it here](https://whater-state-chart.vercel.app/)  

## Technologies Used 🛠️
- **HTML5** for structure  
- **CSS3** for styling & modern dashboard design  
- **JavaScript (ES6+)** for data fetching & logic  
- **Plotly.js** for interactive charts  
- **Leaflet.js** for interactive map markers  
- **Open-Meteo API** for free weather data  

## How to Run 🚀
1. Clone this repository:  
   ```bash
   Open index.html in your browser.

No server required — runs directly in the browser.

Usage 🌍

By default, the app loads the weather chart for Rabat.

To change the city:

 click a marker on the map.

The chart updates automatically.


   git clone https://github.com/the843/weather-state-chart.git
   cd weather-state-chart
