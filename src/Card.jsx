import React, { useEffect, useState } from 'react';

const getImageUrlByTemperature = (temp) => {
  if (temp <= -1 && temp >= -80) {
    return './src/assets/weather-0.jpg';
  } else if (temp >= 1 && temp <= 10) {
    return './assets/weather-1.jpg';
  } else if (temp >= 11 && temp <= 15) {
    return './src/assets/weather-2.jpg';
  } else if (temp >= 16 && temp <= 20) {
    return './src/assets/weather-3.avif';
  } else if (temp >= 21 && temp <= 25) {
    return './src/assets/weather-4.jpg';
  } else if (temp >= 26 && temp <= 30) {
    return './src/assets/weather-5.jpg';
  } else if (temp >= 31 && temp <= 35) {
    return './src/assets/weather-6.webp';
  } else if (temp >= 36 && temp <= 40) {
    return 'https://png.pngtree.com/thumb_back/fw800/background/20230626/pngtree-illustrating-the-summer-season-and-beach-in-3d-picture-image_4055383.jpg';
  } else if (temp > 40) {
    return 'https://cdn.mos.cms.futurecdn.net/7sCwnk9J2PdDbHUBZeUz6M.jpg'; // Desert image
  } else {
    return './src/assets/logo.jpg'; // Default image
  }
};

const Card = ({ weatherData }) => {
  const { temp, cityName, lat, windSpeed } = weatherData;
  const imageUrl = getImageUrlByTemperature(temp);

  const [isMounted, setIsMounted] = useState(false);

  // Trigger animation when component mounts
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
  <div className='card'>
    <div className="hero flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-400 to-blue-700">
      <div
    
        className={`card bg-base-100 w-96 shadow-xl relative transform transition duration-500 ease-in-out ${
          isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        } hover:scale-105 hover:shadow-2xl`}
      >
      
      
        <figure className="relative">
          <img
            src={imageUrl}
            alt={cityName}
            className="w-full h-48 object-cover"
          />
          {/* Temperature displayed in the bottom-right corner */}
          <div className="absolute bottom-2 right-2 bg-opacity-50 text-white bg-black px-2 py-1 rounded">
            {temp}°C
          </div>
        </figure>
        <div className="card-body text-center p-4">
          <h2 className="text-2xl text-white font-bold mb-2">{cityName}</h2>
          <p>Latitude: {lat}</p>
          <p>Wind Speed: {windSpeed} m/s</p>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default Card;