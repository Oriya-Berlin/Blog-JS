import React, {useState} from 'react';
import {Link} from 'react-router-dom';



const Navbar = () => {

  const [userValue, setUserValue] = useState(''); 
  
  
  // const [data, setData] = useState([]); 



  //   const search = () =>{

  //     axios.get(`/posts/search/${userValue}`)
  //     .then(res => setData(res.data))
  //     .catch(err => console.log(err));

  //   }


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


            <li className="nav-item">
              <Link className="nav-link" to="/create">Create Post</Link>
            </li>
     
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>

          </ul>

          <form className="d-flex" >
            <input value={userValue} className="form-control me-2" onChange={e => setUserValue(e.target.value)} type="search" placeholder="Search" aria-label="Search"/>
            <Link className="btn btn-outline-light" to={`/posts/search/${userValue}`}>Search</Link>
            {/* <button onClick={search()} className="btn btn-outline-light" type="submit">Search</button> */}
          </form>

        </div>
      </div>
    </nav>

        {/* here we put the results */}
        {/* we nee to try put search functon on button tag */}






        {/* <Search data={data}/> */}

        {/* <div>
            {
                data.map( (post,key) => ( <Post post={post} key={key}/> ) )
            }          
        </div> */}



    </div>
    )
};



export default Navbar;



