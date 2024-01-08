import React from 'react'
import TodoHeader from './TodoHeader'
import TaskDisplay from './TaskDisplay'
import TaskForm from './TaskForm'
import {TodoAppContext} from '../../Store/TodoAppContext'
import {TodoAppReducer} from '../../Store/TodoAppReducer'
import { useReducer } from 'react'

function TodoApp() {

  const list = [];

  const [TodoList, setTodoList] = useReducer(TodoAppReducer, list);

  return (
    <TodoAppContext.Provider value={{TodoList, setTodoList}}>
      <div className='todoAppContainer'>
        <TodoHeader/>
        <TaskDisplay/>
        <TaskForm/>
      </div>
    </TodoAppContext.Provider>
  )
}

export default TodoApp