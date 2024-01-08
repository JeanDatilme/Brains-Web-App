import React from 'react'
import { useContext } from 'react';
import { WeatherAppContext } from '../../Store/WeatherAppContext';

function WeatherTimeTableDisplay() {


  const {weatherApiData} = useContext(WeatherAppContext);




  function formatTime(timeString) {
    return new Date(timeString).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
  }


  const hours = [8, 10, 12, 14, 16, 18, 20, 22,];
  const timeTable = weatherApiData?.forecast?.forecastday[0]?.hour;
  const filteredTimeTable = timeTable?.filter((_, index) => hours.includes(index));

  




  const weatherTable = filteredTimeTable?.map((day, index) => {
    return (
      <div className='time-section-div' key={`${index} + ${day}`}>
        <div><p className='weather-tt-text'> {formatTime(day.time)}</p></div>
        <div><p className='weather-tt-text'>{day.condition.text}</p></div>
        <div><p className='weather-tt-text'> {day.temp_f}</p></div>
    </div>
    )
  });

  console.log('table',timeTable);
  console.log('filtered TimeTable',filteredTimeTable);


  return (
    <div className='weather-tt-display-container'>
      {weatherTable}
    </div>
  )
}

export default WeatherTimeTableDisplay;