import React from 'react';
import {Link} from 'react-router-dom';



const Post = ({post,key}) => {

    const cardStyle = {
        width: '35rem',    
    }


    return(


        <div className="card border-light mb-3" style={cardStyle} key={post.post_id}>
          <div className="card-header bg-light border-light">
              <h6>
                <span className="badge bg-secondary p-2">
                  {post.author}
                </span>
              </h6>
          </div>
          <div className="card-body text-success">
            <h5 className="card-title">
              {/* <Link to={{ pathname: `/posts/${post._id}`}}>{post.title}</Link> */}
              <Link to={`/posts/${post._id}`}>{post.title}</Link>
            </h5>
            <p className="card-text">{post.content}.</p>
          </div>
          <div className="card-footer bg-light border-light">Footer</div>
      </div>
    )
}

export default Post;




