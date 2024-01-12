import React, {useState, useEffect} from 'react';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.css';
import './Style.css';
import swal from 'sweetalert';

const Login = () => {
    //This hook gets the username from the input field
    const [username, setUser] = useState('');
    //This hook gets the password from the input field
    const [pass, setPass] = useState('');
    //This function checks whether the username and password entered are correct
    const handleUser = (event) => {
        event.preventDefault();
        if(username === 'admin' && pass === 'admin'){
            swal('Login Success', 'Welcome to the Dashboard', 'success');
        }else{
            swal('Login Failed', 'Please check your username and password', 'error');
        }
    }
    
    return (
        //this is the login form with username and password fields and a login button
        <div className='row justify-content-center'>
            <div className='col-md-4'>
                <h1>Authentication</h1>
                    <form>
                        <input type='text' className='form-control' placeholder='Username' value={username} onChange={(e)=>{setUser(e.target.value)}} />
                        <br />
                        <input type='password' className='form-control' placeholder='Password' value={pass} onChange={(e)=>{setPass(e.target.value)}} />
                        <br />
                        <button type='button' className='btn btn-primary' onClick={handleUser}>Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login