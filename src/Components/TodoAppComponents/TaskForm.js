import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react'
import { useContext } from 'react';
import { TodoAppContext } from '../../Store/TodoAppContext';
function TaskForm() {

  const {setTodoList} = useContext(TodoAppContext);

  const [taskList, setTaskList] = useState([]);

  const taskInputref = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const taskObject = {taskName:taskInputref.current.value , TaskId: null, isTaskComplete:null};
    setTaskList([...taskList, taskObject]);
    setTodoList({type: 'addTask', payload: taskObject});
    taskInputref.current.value = '';
  }



  return (
    <div className='taskFormContainer'>


      <form onSubmit={handleSubmit} className='form'>
        <div className='textInputContainer'>
          <textarea ref={taskInputref} className='textInput' ></textarea>
        </div>

        <div className='buttonContainer'>
          <button type='submit'  className='fromButton'>+</button>
        </div>
        
      </form>
    </div>
  )
}

export default TaskForm