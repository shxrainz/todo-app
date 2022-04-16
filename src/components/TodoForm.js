import React, { useState, useEffect, useRef } from 'react'

function TodoForm(props) {

  const [input, setInput] = useState(props.edit ? props.edit.value : '')
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  })

  const handleSubmit = e => {

    e.preventDefault();

    //Validation
    if (input == null || input === '') {
      alert("Please enter a todo item")
      return
    } 

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');

  }

  const handleChange = e => {
    setInput(e.target.value)
  }

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            type='text'
            placeholder='Update an item'
            value={input}
            name='text'
            className='todo-input edit'
            onChange={handleChange}
            ref={inputRef}
          />
          <button className='todo-button edit'>Update</button>
        </>

      ) : (
        <>
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
        </>
      )}
    </form>
  )

}

export default TodoForm