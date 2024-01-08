import React from 'react'
import { useContext } from 'react';
import { WeatherAppContext } from '../../Store/WeatherAppContext';

function WeatherDisaplay() {


  const {weatherApiData} = useContext(WeatherAppContext)


  const maxTempF = weatherApiData?.forecast?.forecastday[0]?.day?.maxtemp_f;
  const minTempF = weatherApiData?.forecast?.forecastday[0]?.day?.mintemp_f;
  const currentTemp = weatherApiData?.forecast?.forecastday[0]?.day?.avgtemp_f;
  const conditions = weatherApiData?.forecast?.forecastday[0]?.day?.condition.text;
  const currentLocation = weatherApiData?.location?.name;


  // console.log('conforming state', weatherApiData);
  // console.log('mintemp state', maxTempF);
  // console.log('maxtemp state', minTempF);
  // console.log('current temp', currentTemp);
  // console.log('conditions ', conditions);
  // console.log('current Location ', currentLocation);


  return (
    <div className='weather-app-div'>

      <div className='location-temp-condition-div'>
        <div className='location-name-div'><p className='weather-p'>{currentLocation || 'Set Weather location'}</p></div>
        <div className='tempature-text-div'><p className='weather-p'>{currentTemp || '40'}°</p></div>
        <div className='condition-text-div'><p className='weather-p'>{conditions || 'Clear'}</p></div>
      </div>
      <div className='high-low-temp-div'>
        <div className='high-condition-div'><p className='weather-p'>H:{maxTempF || '60'}°</p></div>
        <div className='low-condition-div'><p className='weather-p'>L:{minTempF || '40'}°</p></div>
      </div>

    </div>
  )
}

export default WeatherDisaplay