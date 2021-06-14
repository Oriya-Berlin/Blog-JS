import React from 'react';
import {Link} from 'react-router-dom';



const Post = ({post,key}) => {


     // Style
     const style = {
      margin: "3rem auto",
      width: "60rem"
  }

  

    return(

          <div className="container" style={style}>
                <div className="card" key={post.post_id}>
                    <div className="card-header">
                      <span className="badge bg-secondary p-2">{post.author}</span>
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
