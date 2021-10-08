import React, { useEffect, useState } from 'react';
import Post from './post';
import axios from 'axios';



const PostSection = (props) => {  

    const [posts, setPosts] = useState([]);

    useEffect(() => {

        axios.get('/posts',{headers:{'auth-token': localStorage.getItem('token'),},})
        .then(res => setPosts(res.data))
        .catch(err => console.log(err));
    },[]);


    const style ={
        margin: "3rem auto",
        background: "#98bbc1",
        width: "15rem",
        padding: "10px",
        borderRadius: "10px",
    }

   
    return(
    
        <div>
            <div style={style}>
                <h1> Posts </h1>
            </div>

            {
                posts.map( (post,key) => ( <Post post={post} /> ) )
            }          
        </div>
    )
}


export default PostSection;
