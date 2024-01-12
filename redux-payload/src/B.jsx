import React, {useState} from "react";
import { useDispatch } from "react-redux";

const B = () => {
    
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    
    const change = () => {
        dispatch({type: 'SET_NAME', payload: name})
    }

    const change2 = () => {
        dispatch({type: 'SET_SURNAME', payload: surname})
    }

    return ( 
    <div>
        <h1> B </h1>
        <input type="text" placeholder="New name" value={name} onChange={(e)=>{setName(e.target.value)}} />
        <button onClick={change}>Change name</button>

        <input type="text" placeholder="New surname" value={surname} onChange={(e)=>{setSurname(e.target.value)}} />
        <button onClick={change2}>Change surname</button>
    </div>
    );
}

export default B;