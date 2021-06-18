import React, {useEffect, useState} from 'react';
import SuccessMessage from './successMessage';
import axios from 'axios';




const EditPost = (props) => {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
    const [successMessage, setSuccessMessage] = useState('');



    useEffect(() =>{

        axios.get(`/posts/${props.match.params.id}`)
        .then(res => [
            setTitle(res.data.title),
            setAuthor(res.data.author),
            setContent(res.data.content)
        ])
        .catch(err => console.log(err))
    }); //  ??? [] props



    const updateData = (e) =>{

        e.preventDefault();

        const updatedPost = {
            title,
            author,
            content
        };


        axios.put(`/posts/update/${props.match.params.id}`,updatedPost)
        .then(res => setSuccessMessage(<SuccessMessage msg={res.data}/>))
        .catch(err => console.log(err));
        
        // Clear the fields
        setTitle('');
        setAuthor('');
        setContent('');
    }


        // Style
        const style = {
            margin: "3rem auto",
            padding: "4rem",
            width: "32rem",
        }


    return(

        <div className="container bg-light" style={style}>
                   <h1>Edit post</h1>
        <form onSubmit={updateData} encType="multipart/form-data">

        <div className="mb-3">
        <label  className="form-label">Author:</label>
        <input type="text" value ={author} onChange={e => setAuthor(e.target.value)} className="form-control"/>
        </div>

        <div className="mb-3">
        <label  className="form-label">Title:</label>
        <input type="text" value ={title} onChange={e => setTitle(e.target.value)} className="form-control"/>
        </div>

        <div className="mb-3">
        <label  className="form-label">Content:</label>
        <textarea className="form-control" value ={content} onChange={e => setContent(e.target.value)} rows="3"></textarea>
        </div>

        <div class="col-12">
        <button type="submit" className="btn btn-primary">Update</button>
        </div>

        </form>

        <br/>

        {successMessage}

        </div>
    )

}









export default EditPost;

