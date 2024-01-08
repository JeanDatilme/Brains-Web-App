import { createContext } from 'react';

export const BudgetingAppContext = createContext(null);

export const chart = {
  label: 'Amount', // This will be the amount 
  backgroundColor: '#808080', // Background color user choice
  borderColor: 'whitesmoke', // Border color  use Choice
  borderWidth: 2,
  data: [
    { x: 'saving', y: 5, label: 'Label C1' }, // Need saving amount
    { x: 'wants', y: 12, label: 'Label C2' }, // Wants Saving amount
    { x: 'needs', y: 5, label: 'Label C3' }, // Saving saving amount 
  ],
};



export const options = {
    
  scales: {
    x: {
      type: 'category',
      stacked: false,
      ticks: {
        color: 'Black', // Set x-axis tick color
      },
      grid: {color: 'grey'}, 
      
    },


    y: {
      stacked: false,
      ticks: {color: 'Black'},
      beginAtZero: true,
      max: null, // You can set a maximum value for the y-axis if needed
      grid: {color: 'Black'}, 

    },
  },

  plugins: {
    datalabels: {
      color: 'Black', // Set the text color
      anchor: 'end',
      align: 'top',
      offset: 10,
      formatter: (value, context) => context.dataset.data[context.dataIndex].label,
    },

    legend: {labels: {color: 'Black'}}
  },

};