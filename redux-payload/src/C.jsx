import React from "react";
import { useDispatch } from "react-redux";

const C = () => {

    const dispatch = useDispatch();

    const changeUn = () => {
        const newUserName = {
            userName: 'Boti',
            id: 1,
            email: 'arteofejzo@gmail.com'
        }
        dispatch({type: 'SET_USERNAME', payload: newUserName}) 
    }

    return ( 
    <div>
        <h1> C </h1>
        <button onClick={changeUn}>Change Username</button>
    </div>
    );
}

export default C;