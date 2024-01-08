import axios from 'axios';
import WeatherDisaplay from '../WeatherAppComponents/WeatherDisaplay';
import WeatherTimeTableDisplay from '../WeatherAppComponents/WeatherTimeTableDisplay';
import { WeatherAppContext } from '../../Store/WeatherAppContext';
import { useState } from 'react';
import { useEffect } from 'react';


function WeatherApp() {
  
  const [weatherApiData, setWeatherApiData] = useState();
  const [location, setLocation] = useState(['31.000000', '100.000000']);
  const [locationbutton, setLocationButton] = useState(false);

  console.log(locationbutton)
  

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation([latitude.toString(), longitude.toString()]);
        },
        (error) => {
          console.error('Error getting user location:', error.message);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }

    setLocationButton(!locationbutton);
  };

    console.log(locationbutton);

    const latitude = location[0];
    const longitude = location[1];


    const userLocation = `${location[0]} ${location[1]}`;

    // console.log('lat', latitude);
    // console.log('long', longitude);
    // console.log('loc', userLocation);
     


    const todayDate = new Date();

    const year = todayDate.getFullYear();
    const month = String(todayDate.getMonth() + 1).padStart(2, '0'); 
    const day = String(todayDate.getDate()).padStart(2, '0');

    const formattedDate = `${year}-${month}-${day}`;


    useEffect(() => {
    const fetchData = async () => {
    const response = await axios.get(`https://api.weatherapi.com/v1/history.json?key=67590fb212864b22abe00631240501&q=${userLocation}&dt=${formattedDate}`);

      setWeatherApiData(response.data);
    };
    fetchData();
  }, [location]);

  console.log('Weatther Data',weatherApiData);
  console.log('Date',formattedDate);


  return (
    <WeatherAppContext.Provider value={{weatherApiData}}>
      <div className='weather-main-app-container'>
        <WeatherDisaplay/>
        <WeatherTimeTableDisplay/>

        <div className='location-button-container'>

          {locationbutton? '' : (
            <div className='location-button-div'>
              <button className='location-btn-7' onClick={handleGetLocation}>Set Weather Location</button>
            </div>)}
        </div>
      </div>
    </WeatherAppContext.Provider>
  );
}

export default WeatherApp;


