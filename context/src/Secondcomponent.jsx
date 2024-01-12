import React, {useContext} from "react";
import { provider } from "./Context";

const Secondcomponent = () => {
    const obj = useContext(provider);
    const changeName = () => {
        obj.changeName();
    }
    return( <div>
        <h1>Second Component</h1>
        <h2>{obj.age}</h2>
        <button onClick={changeName}>Change Name</button>
    </div>
    );
}
export default Secondcomponent;