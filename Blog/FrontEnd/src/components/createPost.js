import React, {useState} from 'react';
import axios from 'axios';
import SuccessMessage from './successMessage';



const CreatePost = () => {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    

    const sendData = e => {

        e.preventDefault();

        const newPost = {
            title,
            author,
            content
        };


        axios.post('/create',newPost)
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
        <h1>Create new post</h1>
        <form onSubmit={sendData} encType="multipart/form-data">

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
        <button type="submit" className="btn btn-primary">Submit</button>
        </div>

        </form>

        <br/>

        
             {successMessage}
        

    </div>
    )

}


export default CreatePost;
