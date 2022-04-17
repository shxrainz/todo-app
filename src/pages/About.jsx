import React from 'react'

function About() {
  return (
    <div className="todo-app">
      <br />
      <h3>About</h3>
      <br />
      <table>
        <tr>
          <td>Created by: Muhamad Syahreen Bin Mad Sehat</td>
        </tr>
        <tr>
          <td>Email:muhamadsyahreen@gmail.com</td>
        </tr>
      </table>
      <br />
      <h3>Github link (Frontend Code):</h3>
      <a style={{ display: "table-cell" }} href="https://github.com/shxrainz/todo-app" target="_blank" rel="noreferrer">https://github.com/shxrainz/todo-app</a>
      <br />

      <h3>Github link (Backend Code):</h3>
      <a style={{ display: "table-cell" }} href="https://github.com/shxrainz/todo-backend" target="_blank" rel="noreferrer">https://github.com/shxrainz/todo-backend</a>

      <br />

      <h3>Postman Collection:</h3>
      <a style={{ display: "table-cell" }} href="https://bit.ly/3JOlVEr" target="_blank" rel="noreferrer">https://bit.ly/3JOlVEr</a>
    </div>
  )
}

export default About