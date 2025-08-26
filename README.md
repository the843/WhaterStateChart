# Weather State Chart 🌦️

A simple web application that visualizes **24-hour temperature forecasts** for Moroccan cities using the [Open-Meteo API](https://open-meteo.com/) and [Plotly.js](https://plotly.com/javascript/).  

## Features ✨
- Fetches hourly weather data (temperature in °C) for Moroccan cities.  
- Interactive **bar chart** showing 24 hours of temperature variation.  
- Temperatures **above 30°C** are displayed in **red**, otherwise in **blue**.  
- Input field to select a city by entering its **index number (1–20)**.  
- Logs the **current hour & temperature** in the console.  

## Technologies Used 🛠️
- **HTML5** for structure  
- **JavaScript (ES6+)** for data fetching & logic  
- **Plotly.js** for interactive charts  
- **Open-Meteo API** for free weather data  

## How to Run 🚀
1. Clone this repository:  
   ```bash
   git clone https://github.com/the843/weather-state-chart.git
   cd weather-state-chart
Open index.html in your browser.
No server required — runs directly in the browser.

Usage 🌍
By default, the app loads the weather chart for Rabat.

To change the city:

Enter a number between 1 and 20 in the input field.

The chart updates automatically.

Example:

Enter 2 → Casablanca

Enter 5 → Marrakech

Available Cities 🏙️
Rabat

Casablanca

Tangier

Fes

Marrakech

Agadir

Meknes

Ouzoud

Tetouan

El Jadida

Safi

Kenitra

Nador

Beni Mellal

Oujda

Berrechid

Settat

Taza

Khenifra

Larache

