import React from 'react';



const Post = ({post}) => {

    const cardStyle = {
        width: '35rem',
    
        
    }

    return(


        <div className="card border-light mb-3" style={cardStyle}>
        <div className="card-header bg-light border-light">
            <span className="badge bg-secondary p-2">
            {post.author}
            </span>
        </div>
        <div className="card-body text-success">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.content}.</p>
        </div>
        <div className="card-footer bg-light border-light">Footer</div>
      </div>





        // <div>
        //     <h1>{post.title}</h1>
        //     <h6>{post.author}</h6>
        //     <h6>{post.content}</h6>
        //     <br/>
        // </div>
    )
}

export default Post;




