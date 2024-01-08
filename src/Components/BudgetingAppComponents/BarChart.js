import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';


const BarChart = ({reducerChartData, reducerOptionsData}) => {

  const data = {


    labels: [],

    datasets: [reducerChartData],
    
  };

  // const options = reducerOptionsData;
  
  return (
    <div  className='graph-bar-container'>
      <Bar data={data} options={reducerOptionsData} plugins={[ChartDataLabels]} />
    </div>
  );
};

export default BarChart;
