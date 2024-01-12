import React from "react";
import { useSelector } from "react-redux";

const A = () => {

    const name = useSelector(state => state);

    return ( 
    <div>
        <h1> Name {name.name} </h1>
        <h1>Surname {name.surname}</h1>
        <h1>Username {name.userName}</h1>
    </div>
    );
}

export default A;