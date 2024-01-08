export const TodoAppReducer = (state, action) => {

  const {type, payload} = action;

  switch (type) {

      case 'addTask':
        console.log('State: ', state);
        console.log('Payload: ', payload);

        const updatedPayload = {
          ...payload,
          TaskId: state.length, // Set the TaskId to the index of the new task
          isTaskComplete: false // Set isTaskComplete to false
        };
      
        const updatedList = [...state, updatedPayload];
      
        return updatedList;
    
        case 'deleteTask':
          console.log(state);
          console.log(type);
          console.log(payload);

          const deleteUpdatedState = [...state]; // Create a copy of the array
          deleteUpdatedState.splice(payload, 1); // Remove one element at the specified index


          return deleteUpdatedState;

      case 'completeTask':
        console.log(state);
        console.log(type);
        console.log(payload);
        // Update the isTaskComplete property of the task at the specified index
        const completeUpdatedState = state.map((task, index) => {
          if (index === payload) {
            return { ...task, isTaskComplete: !task.isTaskComplete }; // or toggle it based on your requirement
          }
          return task;
        });
        return completeUpdatedState;

        case 'taskNameChange':
          console.log(state);
          console.log(payload);

          const taskNameUpdatedState = state.map((task, index) => {
            if (index === payload[0]) {
              return { ...task, taskName: payload[1]}; 
            }
            return task;
          });



          return taskNameUpdatedState;
  
      default:
        return state;
      
  }

}