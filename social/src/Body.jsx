import React from "react";
import { useState } from "react";
import './Body.css';

const Body = () => {

    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const registerUser = (event) => {
        event.preventDefault();
        
        const users = JSON.parse(localStorage.getItem('users')) || []; 
        const newUser = {name, username, password};
        
        users.push(newUser);
        
        localStorage.setItem('users', JSON.stringify(users));

        alert("User registered successfully!");
    }
    

    return (
        <div className="flex bg-indigo-400">
            <div className="w-1/2 h-1/2">
                <img src="https://camo.githubusercontent.com/19942e19e935d35f3613bbcee7e584b6ad479ce5bf77342bac3f1f99fb005272/68747470733a2f2f692e696d6775722e636f6d2f4f7a49667143512e706e67" alt="social media" />
            </div>
            <div className="w-1/2 bg-indigo-400 h-1/2" id="register">
                <h1 className="text-3xl mx-2 my-2 font-bold text-gray-200">Not a member yet?</h1>
                    <form onSubmit={registerUser}>
                    <br/>
                        <input className="py-1 px-1 mx-2 my-2 border border-slate-900 rounded" type="text" placeholder="Name and Surname" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                    <br/>
                        <input className="py-1 px-1 mx-2 my-2 border border-slate-900 rounded" type="text" placeholder="Username" value={username} onChange={(e)=> {setUsername(e.target.value)}}/>
                    <br/>
                        <input className="py-1 px-1 mx-2 my-2 border border-slate-900 rounded" type="password" placeholder="Password" value ={password} onChange={(e)=>{setPassword(e.target.value)}} />
                    <br/>
                        <button className="bg-gray-400 hover:bg-slate-900 text-white font-bold py-2 px-4 mx-2 my-2 rounded-full" type="submit" value='sign up'>Register</button>
                </form>
            </div>
        </div>
    );
}
export default Body;