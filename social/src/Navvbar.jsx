import React from 'react';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'

const Navvbar = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const navigate = useNavigate();

    const Logout = () => {
        localStorage.removeItem('logged');
        navigate('/');
        window.location.reload(true);
    }

    const Login = () => {
      

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.username === username && user.password === password);

        if (user) {
            alert("Login successful!");
            localStorage.setItem('logged', 'logged')
            navigate('/dashboard');
            window.location.reload(true);
        } else {
            alert("Wrong username or password!");
        }
    }

    return (
        <div className='flex flex-row bg-indigo-500'>
            <div>
                <h1 className="text-3xl mx-2 my-2 font-bold text-gray-200">Social Media</h1>
            </div>
            
                {
                    (()=>{
                        if(localStorage.getItem('logged'))
                        {
                            return <button onClick={Logout}>Log out</button> 
                        }
                        else {
                            return <div>
                                <input className="py-1 px-1 mx-2 my-2 border border-slate-900 rounded" type="text" placeholder="Username" value={username} onChange={(e)=>{setUsername(e.target.value)}} />
                                <input className="py-1 px-1 mx-2 my-2 border border-slate-900 rounded" type="password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                                <button className="bg-gray-400 hover:bg-slate-900 text-white font-bold py-2 px-4 mx-2 my-2 rounded-full" type="submit" value="Login" onClick={Login}>Login</button>
                            </div>
                        }
                    })()
                }
            
        </div>
    );
}
export default Navvbar;
