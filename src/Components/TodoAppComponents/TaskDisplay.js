import React from 'react'
import { useState } from 'react';
import { TodoAppContext } from '../../Store/TodoAppContext';
import { useContext } from 'react';



function TaskDisplay() {

  const {TodoList, setTodoList} = useContext(TodoAppContext);


   const handleDeleteClick = (index) => {
    setTimeout(() => {
      setTodoList({ type: 'deleteTask', payload: index });
    }, 100);

  }

  const handleCompleteClick = (index) => {
      setTodoList({ type: 'completeTask', payload: index });

  }

  const handleTaskNameChange = (index, newTaskName) => {

    setTodoList({type: 'taskNameChange', payload: [index, newTaskName]});
  }

  const todoListDisplay = TodoList.map((task, index) => {
    const isTaskComplete = task.isTaskComplete;

    const containerStyle = {
      // Add your styles for completed tasks here
      textDecoration: isTaskComplete ? 'line-through' : 'none',
      backgroundColor: isTaskComplete ? '#e2e2e2' : 'transparent',
      transition: 'background-color 1.5s'

    };

    const completeButtonStyle = {
      backgroundColor: isTaskComplete ? 'rgb(165, 246, 165' : 'transparent', // Change the color to your desired filled style

    };
    


      return (
        <div key={`${index} + ${task.taskName}`} className='taskContainer' style={containerStyle}>   
  
          <div className='deleteButtonContainer' > {/* Delete Button*/}
            <input onClick={() => handleDeleteClick(index)} className='deleteCheckbox'  type='checkbox'></input> 
          </div> 
  
          <div className='textContainer'contentEditable suppressContentEditableWarning onBlur={(e) => handleTaskNameChange(index, e.target.innerText)}   >
            {task.taskName}
          </div> 
  
          <div className='completeButtonContainer'> {/*Add Button*/}
             <input onClick={() => handleCompleteClick(index)} style={completeButtonStyle} className='completeCheckbox' type='checkbox'></input>
          </div>
  
        </div>
      )


  });


  return (
    <div className='taskDisplayContainer'>
      {todoListDisplay}
    </div>
  )
}

export default TaskDisplay