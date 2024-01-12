import React, {useContext} from "react";
import { provider } from "./Context";

const Firstcomponent = () => {

    const obj = useContext(provider);
    const changeAge = () => {
        obj.changeAge();
    }

        return (
        <div>
            <h1>First Component</h1>
            <h2>{obj.name}</h2>
            <button onClick={changeAge}>Change Age</button>
        </div>
        ); 
    }
export default Firstcomponent;