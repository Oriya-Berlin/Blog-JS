import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';



const SinglePostPage = (props) => {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');


    useEffect(() => {
        axios.get(`/posts/${props.match.params.id}`)
        .then(res => [
            setTitle(res.data.title),
            setAuthor(res.data.author),
            setContent(res.data.content)
        ])
        .catch(err => console.log(err))
    }, [props]);



    const style = {
        margin: '6rem auto',
        padding: '3rem 14rem',
        background: '#f8f9fa',
    }


    return(
    <div style={style}>
        <h1>{title}</h1>
        <h6>{content}</h6>
        <h6><span class="badge bg-secondary">{author}</span></h6>
        <Link to='/posts' className='btn btn-primary'>Back </Link>
        <Link to={`/posts/update/${props.match.params.id}`} className='btn btn-primary'>Edit </Link>
    </div>
    )

}

export default SinglePostPage;



