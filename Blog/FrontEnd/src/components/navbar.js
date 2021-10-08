import React, {useState, useEffect, useContext} from 'react';
import {Link, useHistory} from 'react-router-dom';
import axios from 'axios';
import UserAuth from './../context/auth-context';
import Post from './post'



const Navbar =  () => {

  const history = useHistory();
  const {userCredentials, setUserCredentials} = useContext(UserAuth);
  const [searchInput, setSearchInput] = useState(''); 



  useEffect( () => {
       
    if(localStorage.getItem('userCredentials'))
      setUserCredentials(JSON.parse(localStorage.getItem('userCredentials')));
    
  },[]);


  const logout = () => {

    setUserCredentials({
      user_id: null,
      username: null,
      email: null,
      token: null,
      isAuth: false
    });

    // TODO: handle that, afte user token expired, we need to remove
    // 'userCredentials' from localStorage
    localStorage.removeItem('userCredentials');
    history.push('/user/login');
  }





  // TODO: change that name to result
  const [data, setData] = useState([]); 



    const search = () =>{

      axios.get(`/posts/search/${searchInput}`)
      .then(res => setData(res.data))
      .catch(err => console.log(err));

    }


    return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-info">
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">Blog</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            
            
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/posts">Home</Link>
            </li>
      
            {
              userCredentials.token ? 
              <>
                <li className="nav-item">
                <Link className="nav-link" to={`/user/profile/${userCredentials.user_id}`}>Hi, {userCredentials.username}</Link>
                </li>

                <li className="nav-item">
                <Link className="nav-link" to={`/user/profile/${userCredentials.user_id}`}>My Profile</Link>
                </li>

                <li className="nav-item" onClick={(e) => logout()}>
                <div className="nav-link">Log-out</div>
                </li>
              </>
            :
              <li className="nav-item">
              <Link className="nav-link" to="/user/login">Login</Link>
              </li>
            }

            <li className="nav-item">
              <Link className="nav-link" to="/posts/create/new">Create Post</Link>
            </li>
     
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>

          </ul>

          <form className="d-flex" >
            <input value={searchInput} className="form-control me-2" onChange={e => setSearchInput(e.target.value)} type="search" placeholder="Search" aria-label="Search"/>
            {/* <Link  onSubmit={search()} type="submit" className="btn btn-outline-light" to={`/posts/search/${searchInput}`}>Search</Link> */}
            <button onClick={search()} className="btn btn-outline-light" type="submit">Search</button>
          </form>

        </div>
      </div>
    </nav>

        {/* here we put the results */}


        {/* <Search data={data}/> */}

        <div>
            {
                data.map( (post,key) => ( <Post post={post} key={key}/> ) )
            }          
        </div>



    </div>
    )
};



export default Navbar;



