import React, { useEffect, useState } from 'react';
import Post from './post';
import axios from 'axios';



const PostSection = () => {  

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('/posts')
        .then(res => setPosts(res.data))
        .catch(err => console.log(err));
    });


    const style ={
        margin: "3rem auto",
        background: "#98bbc1",
        width: "15rem",
        padding: "10px",
        "border-radius": "10px",
    }

   
    return(
    
        <div>
                        <div className="container" style={style}>
                            <h1> Posts</h1>
                        </div>

            {
                posts.map( (post,key) => ( <Post post={post} key={key}/> ) )
            }          
        </div>
    )
}

export default PostSection;
