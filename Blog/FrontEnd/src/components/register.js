import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';



const Register = () => {

    const history = useHistory();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const sendData = e =>{

        e.preventDefault();

        const newUser = {
            username,
            email,
            password
        }

        axios.post('/user/register', newUser)
        .then(res => console.log(res.data))
        .catch(err => console.log(err));

        history.push('/user/login');
    }



    // Style
    const style = {
        margin: "3rem auto",
        padding: "4rem",
        width: "32rem",
    }


    return(
        <div className="container bg-light" style={style}>

        <h1>Register</h1>
            <form onSubmit={sendData} encType="multipart/form-data">

                <div className="mb-3">
                    <label className="form-label">User Name</label>
                    <input  value={username} onChange={e => setUsername(e.target.value)} type="text" className="form-control" />
                    
                </div>

                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input value={email} onChange={e => setEmail(e.target.value)} type="email" className="form-control" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>

                <div className="mb-3">
                    <label value={password} onChange={e => setPassword(e.target.value)} className="form-label">Password</label>
                    <input type="password" className="form-control"/>
                </div>

                {/* <div className="mb-3">
                    <label className="form-label">Confirm (NOT YET) Password</label>
                    <input type="password" className="form-control"/>
                </div> */}
                {/* <Link  type="submit" to={"/user/login"}  className="btn btn-primary">Register</Link> */}

                <button  type="submit" className="btn btn-primary"> Register</button>

            </form>

    </div>
    )

}


export default Register;
