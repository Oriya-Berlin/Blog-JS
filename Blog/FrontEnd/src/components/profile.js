import React,{useState, useEffect} from 'react';
import Post from './post';
import axios from 'axios';



const Profile = ({user}) => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('/posts/user_id') // change that to user name
    .then(res => {
      setPosts(res.data);
    })
  }, []);


    const margin = {
      'margin-top': '4rem',
      'margin-bottom': '4rem'
    }
    const padding = {
      'padding': '30px 30px 30px 30px'
    }
    const height = {
      'height': '330px'
    }


    return(

        <div>
        <div className="container bg-light" style={margin}>
        <div className="main-body" >
        
         
              <div className="row gutters-sm"  style={padding}>


                <div className="col-md-4 mb-3">
                  <div className="card">
                    <div className="card-body" style={height}>
                      <div className="d-flex flex-column align-items-center text-center">
                        <img alt="" src="https://bootdey.com/img/Content/avatar/avatar7.png"  className="rounded-circle" width="150"/>
                        <div className="mt-3">
                          <h4>{user.username}</h4>
                          <p className="text-secondary mb-1">Full Stack Developer</p>
                          <p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
                        </div>
                      </div>
                    </div>
                  </div>
            


                </div>
                <div className="col-md-8 ">
                  <div className="card mb-3">
                    <div className="card-body" style={height}>
                      <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Full Name</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          Kenneth Valdez
                        </div>
                      </div>
                      <hr/>
                      <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Email</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          fip@jukmuh.al
                        </div>
                      </div>
                      <hr/>
                      <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Phone</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          (239) 816-9029
                        </div>
                      </div>
                      <hr/>
                      <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Mobile</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          (320) 380-4539
                        </div>
                      </div>
                      <hr/>
                      <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Address</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          Bay Area, San Francisco, CA
                        </div>
                      </div>
                      

                  

                    </div>
                  </div>
                </div>


                <h1> here we gonna put current user posts</h1>
                {
                  // change here to filter method by user id
                  posts.map( (post,key) => ( <Post post={post} key={key}/> ) )
                }  

              </div>
    
            </div>
        </div>
        </div>
    )
}


export default Profile;


