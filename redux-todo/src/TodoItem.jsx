import React from "react";
import { useDispatch } from "react-redux";

const TodoItem = ({task}) => {

    const [show, setShow] = React.useState('none');
    const [edit, setEdit] = React.useState('');

    const dispatch = useDispatch();
    const deleteTask = (task) => {
        dispatch({type: 'DELETE_TASK', payload: task});
    }

    const editTask = () => {
        setShow('inline');
    }

    const updateTask = (task) => {
        dispatch({type: 'UPDATE_TASK', payload:{oldTask: task, newTask: edit}});
        setShow('none');
    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-9">
                <h1>{task}</h1>
            </div>
            <div className="col-md-1">
                <button className="btn btn-danger" onClick={()=>{deleteTask(task)}}>Delete</button>
            </div>
            <div className="col-md-1">
                <button className="btn btn-success" onClick={editTask}>Edit</button>
            </div>
            <div>
                <input type="text" style={{display: show}} value={edit} onChange={(e)=>{setEdit(e.target.value)}} />
                <button className="btn btn-secondary m-1" style={{display: show}} onClick={()=>{updateTask(task)}}>Update</button>
            </div>
        </div>
    );
}

export default TodoItem;