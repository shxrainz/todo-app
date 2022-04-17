import React, { useEffect, useState } from 'react';
import { getTodos } from '../connection/connection';

const List = () => {

  const [todos, setTodos] = useState('')

  useEffect(() => {
    getCurrentTodo();
  }, []);

  //Get All Todo
  const getCurrentTodo = async () => {
    try {
      await getTodos().then(res => {
        setTodos(res.data)
      })

    } catch (error) {
      console.log("getData Todos", error)
    }

  }

  return (
    <div className="todo-app">
      <br />
      <h3>Todo List</h3>
      <br />
      <>
        {todos !== '' ?
          todos.map((todo, index) => (
            <div className={todo.status === 0 ? 'todo-row complete' : 'todo-row-wip'} key={index}>
              <div>
                {todo.todo}
              </div>
              {todo.status !== 0 ?
                <div className='icons'>
                  <h5>In progress</h5>
                </div>
                :
                <div>
                  <h3>Completed</h3>
                </div>
              }
            </div>
          ))
          :
          <>
            <div className='todo-loading'>
              <div className='dot-pulse'>
              </div>
            </div>
            <h5>Loading</h5>
          </>
        }
      </>
    </div>
  )
}

export default List