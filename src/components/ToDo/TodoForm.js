import React, { useState, useEffect, useRef } from 'react';
import { addTodo, getTodos, deleteTodoItem, updateTodoItem } from '../../connection/connection';
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'

const TodoForm = () => {

    const [input, setInput] = useState('')
    const [todos, setTodos] = useState('')
    const [updateVisible, setUpdateVisible] = useState(false)
    const inputRef = useRef(null)
    const [inputUpdate, setInputUpdate] = useState('')
    const [editID, setEditID] = useState('')

    useEffect(() => {
        inputRef.current.focus()
        getCurrentTodo();
    }, [])

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

    //Delete Todo
    const deleteTodo = async (id) => {

        console.log("deleteTodoItem id", id)
        if (id !== null || id !== '') {
            await deleteTodoItem(id).then(res => {
                console.log("deleteTodoItem", res)
                alert(res.data.msg)
                getCurrentTodo()
            })

        }

    }

    //Update Todo
    const updateTodo = async (id, todo) => {

        setInputUpdate(todo)
        setUpdateVisible(true)
        console.log("updateTodoItem id", id)
        if (id !== null || id !== '') {
            setEditID(id)
        }

    }

    const handleSubmit = async (e) => {

        e.preventDefault();

        //Validation
        console.log("updateVisible",updateVisible)
        if (updateVisible) {

            if (inputUpdate == null || inputUpdate === '') {
                alert("Please enter a todo item")
                return
            } else {
                //UpdateTodo
                if (editID !== null || editID !== '') {
                    let body = {
                        "todo": inputUpdate,
                        "status": 1
                    }
                    await updateTodoItem(editID, body).then(res => {
                        console.log("updateTodoItem", res)
                        setEditID('')
                        alert(res.msg)
                        setUpdateVisible(false)
                        getCurrentTodo()
                    })
                }
            }
            setInput('');

        } else {

            if (input == null || input === '') {
                alert("Please enter a todo item")
                return
            } else {
                //AddTodo
                let body = {
                    "todo": input,
                    "status": 1
                }
                console.log("Body", body)
                await addTodo(body).then(res => {
                    alert(res.msg)
                    getCurrentTodo()
                })


            }
            setInput('');
        }
    }

    const handleChange = e => {
        setInput(e.target.value)
    }

    const handleChangeUpdate = e => {
        setInputUpdate(e.target.value)
    }

    return (
        <div>
            <h1>Simple Todo App</h1>
            {!updateVisible ?
                <>
                    <form className='todo-form' onSubmit={handleSubmit}>
                        <input
                            type='text'
                            placeholder='Create a todo item'
                            value={input}
                            name='text'
                            className='todo-input'
                            onChange={handleChange}
                            ref={inputRef}
                        />
                        <button className='todo-button'>Add Todo</button>
                    </form>
                    <>
                        {todos !== '' && todos.map((todo, index) => (
                            <div className={todo.status === 0 ? 'todo-row complete' : 'todo-row'} key={index}>
                                <div>
                                    {todo.todo}
                                </div>
                                {todo.status !== 0 ?
                                    <div className='icons'>
                                        <RiCloseCircleLine onClick={() => deleteTodo(todo.id)} className='delete-icon' />
                                        <TiEdit onClick={() => updateTodo(todo.id, todo.todo)} className='edit-icon' />
                                    </div>
                                    :
                                    <div>
                                        <h3>Completed</h3>
                                    </div>
                                }
                            </div>
                        ))}
                    </>
                </>
                :
                <>
                    <form className='todo-form' onSubmit={handleSubmit}>
                        <input
                            type='text'
                            placeholder='Edit a todo item'
                            value={inputUpdate}
                            name='text'
                            className='todo-input-update'
                            onChange={handleChangeUpdate}
                        />
                        <button className='todo-button-update'>Update Todo</button>
                    </form>
                </>
            }
        </div>
    )
}

export default TodoForm