import React, {useState} from "react";
import { useDispatch } from "react-redux";


const AddTask = () => {

    const [task, setTask] = useState("");

    const dispatch = useDispatch();
    
    const add = () => {
        dispatch({type: 'ADD_TASK', payload: task});
        setTask("");
    }

    return (
        <div>
            <h1>Add a task</h1>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <input type="text" className="form-control w-75" style={{display: 'inline'}} placeholder="Add a task" value={task} onChange={(e) =>{setTask(e.target.value)}} />
                    <button className="btn btn-primary m-3" onClick={add}>ADD</button>
                </div>
            </div>
        </div>
    );
}

export default AddTask;