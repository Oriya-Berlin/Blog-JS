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


   
    return(
    
        <div>
            {
                posts.map( (post) => ( <Post post={post}/> ) )
            }          
        </div>
    )
}

export default PostSection;
