export const BudgetAppReducer = (state, action) => {
  const {type, payload} = action

  switch(type) {

    case 'DataChange':
      // console.log('Reducer state: ',state);
      // console.log('Reducer Type: ', type);
      // console.log('Reducer payload: ', payload);
      return {
        ...state, 
        data: payload,
      }
      break;        

    case 'editBar':

      console.log('Reducer state: ',state);
      console.log('Reducer Type: ', type);
      console.log('Reducer payload: ', payload);
      return {
        ...state, 
        backgroundColor: payload[0] || state.backgroundColor, 
        borderColor: payload[1] || state.borderColor,
        borderWidth: payload[2] || state.borderWidth,
      }
      break;
        
    case 'editGraph':
      console.log('Reducer state: ', state);
      console.log('Reducer Type: ', type);
      console.log('Reducer payload: ', payload);
    
      const updatedOptions = {
        ...state,
        scales: {
          ...state.scales,
          x: {
            ...state.scales.x,
            ticks: {
              ...state.scales.x.ticks,
              color: payload[0] || state.scales.x.ticks.color, // Set a new value for the x-axis tick color
            },
            grid: {
              ...state.scales.x.grid,
              color: payload[4] || state.scales.x.grid.color,
            },
          },

          y: {
            ...state.scales.y,
            max: payload[5] || state.scales.y.max,
            
            ticks: {
              ...state.scales.y.ticks,
              color:  payload[3] ||  state.scales.y.ticks.color, // Set a new value for the y-axis tick color
            },
            grid: {
              ...state.scales.y.grid,
              color: payload[1] || state.scales.y.grid.color, // Set a new value for the x-axis tick color
            },
            
          },
        },
        plugins: {
          ...state.plugins,
          datalabels: {
            ...state.plugins.datalabels,
            color: payload[2] ||  state.plugins.datalabels.color, // Set a new value for datalabels color
          },
          legend: {
            ...state.plugins.legend,
            labels: {
              ...state.plugins.legend.labels,
              color: 'green', // Set a new value for legend color
            },
          },
        },
      };
    
      // Return the updated state
      return {
        ...state,
        ...updatedOptions,
      };
    
      
      
  }

}

