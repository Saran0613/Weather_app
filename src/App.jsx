import React, { useState } from 'react';
import Navbar from './Navbar';
import Card from './Card';
import Footer from './Footer';
import Home from './Home';



const App = () => {
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeather = async (cityName) => {
    if (!cityName) {
      alert('Please enter a valid city name');
      return;
    }

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=00e7308070b78e5595e028f0d81998a5&units=metric`
      );
      const data = await response.json();

      if (response.ok) {
        setWeatherData({
          temp: data.main.temp,
          lat: data.coord.lat,
          lon: data.coord.lon,
          windSpeed: data.wind.speed,
          cityName: data.name,
        });
      } else {
        alert(data.message || 'City not found');
      }
    } catch (error) {
      console.error('Error fetching the weather data:', error);
      alert('Failed to fetch weather data. Please try again later.');
    }
  };

  return (

    <div className="app">
      <Navbar onSearch={fetchWeather} />

      {weatherData ? (
        <Card weatherData={weatherData} />
      ) : (
        <div className="flex flex-col justify-center items-center h-screen">
          <img
            className= "w-[5%] mb-4"
            src="https://cdn-icons-png.freepik.com/256/831/831319.png?uid=R160018825&ga=GA1.1.14837512.1727186772&semt=ais_hybrid"
            alt="Weather icon"
          />
          <h1 className=" text-3xl font-bold">Weather App</h1>
       
        </div>
      )}
    {/* <Home /> */}
  
      <Footer />
    </div>
  );
};

export default App;
