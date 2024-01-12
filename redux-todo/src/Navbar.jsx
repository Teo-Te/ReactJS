import React from "react";
import { useSelector } from "react-redux";


const Navbar = () => {

    

    const todos = useSelector(state => state);

    return (
        <div className="row ">
            <nav className="navbar navbar-dark bg-dark justify-content-center">
                <h1 className="navbar-brand">ToDo's count: {todos.tasks.length}</h1>
            </nav>
        </div>
    );
}

export default Navbar;