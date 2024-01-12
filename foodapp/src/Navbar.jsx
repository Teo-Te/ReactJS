import React from "react";
import "./Body.css"
const Navbar = () => {
    return (
        <div className="bg-stone-500">
        <h1 className="text-slate-50 underline italic">Food App</h1>
        <div className="links">
            <a className="m-3" href="/">Home</a>
            <a className="m-3" href="/create">Order</a>
            <a className="m-3" href="/about">Contact Us</a>
        </div>
        </div>
    );
}

export default Navbar;