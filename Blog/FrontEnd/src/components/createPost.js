import React, {useState} from 'react';
import axios from 'axios';
import SuccessMessage from './successMessage';
import {useHistory} from 'react-router-dom';



const CreatePost = () => {


    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    
    const history = useHistory();



    const sendData = e => {

        e.preventDefault();
        
        let authorID = '';
        let authorUserName = '';

        if(localStorage.getItem('userCredentials'))
        {
            authorID = JSON.parse(localStorage.getItem('userCredentials').user_id);
            authorUserName = JSON.parse(localStorage.getItem('userCredentials').username);
        }
        else
        {
            // TODO: add some message to the user
            history.push('/user/login');
            return;
        }

        const newPost = {
            title,
            author_id: authorID,
            author_username: authorUserName,
            content
        };


        axios.post('/posts/create',newPost)
        .then(res => setSuccessMessage(<SuccessMessage msg={res.data}/>))
        .catch(err => console.log(err));
        
        // Clear the fields
        setTitle('');
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
