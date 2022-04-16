import React from "react";
import '../App.css'
import TodoForm from "../components/ToDo/TodoForm";

const MainPage = () => {
    return (
        <div className="todo-app">
            <TodoForm />
        </div>
    )
}

export default MainPage