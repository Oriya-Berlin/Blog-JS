import React from 'react';
import {Link} from 'react-router-dom';



const Post = ({post}) => {


    const date = new Date(post.date);


     // Style
     const style = {
      margin: "3rem auto",
      width: "60rem",
    }
    const align_left = {
        'textAlign': 'left'
    }
    const align_right = {
      'textAlign': 'right'
    } 

    return(
      
          <div className="container" style={style}>

                <div className="card" key={post.post_id}>

                    <div className="card-header" >
                        <div className="row">
                            <div className="col-sm-3" style={align_left}>
                                <img alt="" src="https://bootdey.com/img/Content/avatar/avatar7.png"  className="rounded-circle" width="40"/>
                                {/* <Link to={`/user/profile/${post.author._id}`}> */}
                                    <span className="badge bg-secondary p-2 col-sm-6"> {post.author_username}</span>
                                {/* </Link> */}
                            </div>
                            <div className="col-sm-9" style={align_right}>       
                                {date}
                            </div>
                        </div>
                    </div>

                    <div className="card-body">
                      <h5 className="card-title">{post.title}</h5>
                      <p className="card-text">{post.content}</p>
                      <Link className="btn btn-info" to={`/posts/${post._id}`}>Read</Link>
                    </div>

                </div>
          </div>

    )
}


export default Post;
