import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {

    const cart = useSelector(store => store);

    return (
        <div>
            <h1>Navbar, counter {cart.counter}</h1>
        </div>
    )
    
}

export default Navbar;