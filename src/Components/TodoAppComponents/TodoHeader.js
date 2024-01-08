import React, { useState } from 'react'
import { useContext } from 'react'
import { TodoAppContext } from '../../Store/TodoAppContext';
import { useEffect } from 'react';

function Header() {

  const {TodoList} = useContext(TodoAppContext);

  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  const [completedTask, setCompletedTask] = useState([]);




  useEffect(() => {

    const completeFiltered = TodoList.filter((task) => {
      if (task.isTaskComplete === true) {
        return {
          task
        }
      }

      
    });
    
    setCompletedTask(completeFiltered);
    
  
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);

  }, [TodoList]);

  
  // console.log('Cmopleted: ', completedTask);


  const completedTaskCount = completedTask.length;



  const formattedTime = currentDateTime.toLocaleTimeString();
  const formattedDate = currentDateTime.toDateString();
  const count = TodoList.length;


  return (
    <div className='TodoHeaderContainer'>
      <div className='Todoheader'>
       <div> <p className='date'>{formattedDate}  {formattedTime}</p> </div>
       <div> <p className='taskCount'>Task: {completedTaskCount}/{count}</p> </div>
      </div>
    </div>
  )
}

export default Header