import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {

    const todos = useSelector(state => state);

    const todoList = todos.tasks.map((task) => {
        return (
            <TodoItem task={task} />
        )
    })

    return (
        <div className="row justify-content-center">
            <div className="col-md-6">
                {todoList}
            </div>
        </div>
    );
}

export default TodoList;
