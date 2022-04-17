import React, { useState, useEffect, useRef } from 'react';
import { addTodo, getTodos, deleteTodoItem, updateTodoItem, updateTodoItemCompleted } from '../../connection/connection';
import { RiCloseCircleLine, RiCheckboxLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'

const TodoForm = () => {

    const [input, setInput] = useState('')
    const [todos, setTodos] = useState('')
    const [updateVisible, setUpdateVisible] = useState(false)
    const inputRef = useRef(null)
    const [inputUpdate, setInputUpdate] = useState('')
    const [editID, setEditID] = useState('')
    const [isLoading, setLoading] = useState(false)

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

        if (id !== null || id !== '') {
            setLoading(true)
            await deleteTodoItem(id).then(res => {
                //console.log("deleteTodoItem", res)
                alert(res.data.msg)
                getCurrentTodo()
                setLoading(false)
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

    //Complete Todo Item
    const completeTodo = async (id) => {

        if (id !== null || id !== '') {
            setLoading(true)
            await updateTodoItemCompleted(id).then(res => {
                //console.log("completeTodoItem", res)
                alert(res.msg)
                getCurrentTodo()
                setLoading(false)
            })

        }

    }

    const handleSubmit = async (e) => {

        e.preventDefault();

        //Validation
        if (updateVisible) {

            if (inputUpdate == null || inputUpdate === '') {
                alert("Please enter a todo item")
                return
            } else {
                //UpdateTodo
                if (editID !== null || editID !== '') {
                    setLoading(true)
                    let body = {
                        "todo": inputUpdate,
                        "status": 1
                    }
                    await updateTodoItem(editID, body).then(res => {
                        //console.log("updateTodoItem", res)
                        setEditID('')
                        alert(res.msg)
                        setUpdateVisible(false)
                        getCurrentTodo()
                        setLoading(false)
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
                setLoading(true)
                let body = {
                    "todo": input,
                    "status": 1
                }
                await addTodo(body).then(res => {
                    alert(res.msg)
                    getCurrentTodo()
                    setLoading(false)
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
                        {todos !== '' && !isLoading ?
                            todos.map((todo, index) => (
                                <div className={todo.status === 0 ? 'todo-row complete' : 'todo-row'} key={index}>
                                    <div>
                                        {todo.todo}
                                    </div>
                                    {todo.status !== 0 ?
                                        <div className='icons'>
                                            <RiCloseCircleLine onClick={() => deleteTodo(todo.id)} className='delete-icon' />
                                            <TiEdit onClick={() => updateTodo(todo.id, todo.todo)} className='edit-icon' />
                                            <RiCheckboxLine onClick={() => completeTodo(todo.id)} className='check-icon' />
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
                    {!isLoading ?
                        <div>
                            <button onClick={() => { setUpdateVisible(false) }}>Go Back</button>
                        </div>
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
            }
        </div>
    )
}

export default TodoForm