import React, {useState, useContext} from 'react';
import {Link, useHistory} from 'react-router-dom';
import axios from 'axios';

import UserAuth from './../context/auth-context';


const Login = () => {

    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {userCredentials, setUserCredentials} = useContext(UserAuth);



    const sendData = (e) => {

        e.preventDefault();

        const user = {
            email,
            password
        }

        axios.post('/user/login', user)
        .then(res => { 

            if(res.headers['auth-token'])
            {      
                 setUserCredentials({
                    user_id: res.data.user.id,
                    username: res.data.user.username,
                    email: res.data.user.email,
                    token: res.data.token,
                    isAuth: true
                });

                // TODO: we need to ask Or Ohayun why that didn't updte
                // console.log(userCredentials);

                localStorage.setItem('userCredentials', JSON.stringify({
                    user_id: res.data.user.id,
                    username: res.data.user.username,
                    email: res.data.user.email,
                    token: res.data.token,
                    isAuth: true
                }));

                history.push('/posts' );
            }
            else{
                history.push('/user/login');         
            }
        })
        .catch(err => {
            console.log(err)
        });
        
    }


        // Style
        const style = {
            margin: "3rem auto",
            padding: "4rem",
            width: "32rem",
        }

        
    return(

        <div className="container bg-light" style={style}>

            <h1>Login</h1>

                <form onSubmit={sendData} encType="multipart/form-data">
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input value={email} onChange={e => setEmail(e.target.value)} type="email" className="form-control" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input value={password} onChange={e => setPassword(e.target.value)} type="password" className="form-control"/>
                    </div>
    
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
                
                <br/>
                
                <p>
                    Didn't have an account yet?
                    <Link to='/user/register'> Register</Link>
                </p>
        </div>
    )

}


export default Login;