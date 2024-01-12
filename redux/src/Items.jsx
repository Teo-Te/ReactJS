import React from "react";
import { useDispatch } from "react-redux";

const Items = () => {

    const dispatch = useDispatch();

    const add = () => {
        dispatch({ type: "INCREMENT" });
    }
    
    const remove = () => {
        dispatch({ type: "DECREMENT" });
    }

    return (
        <div>
            <h1>Items</h1>
            <button onClick={add}>+</button>
            <br />
            <button onClick={remove}>-</button>
        </div>
    )
}

export default Items;