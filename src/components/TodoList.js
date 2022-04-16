import React, { useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

function TodoList() {

    const [todos, setTodos] = useState([])
 
    //Add Todo
    const addTodo = todo => {
        const newTodos = [todo, ...todos];
        console.log("New Todo",newTodos)
        setTodos(newTodos);

    }

    //Update Todo
    const updateTodo = (todoId, newValue) => {
        setTodos(prev => prev.map(item => item.id === todoId ? newValue : item))
    }

    //Remove Todo
    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)
        setTodos(removeArr)
    }

    //Complete Todo
    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo;
        });
        setTodos(updatedTodos);
    }

    return (
        <div>
            <h1>Simple Todo App</h1>
            <TodoForm onSubmit={addTodo} />
            {/* <Todo
                todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
            /> */}
        </div>
    )
}

export default TodoList