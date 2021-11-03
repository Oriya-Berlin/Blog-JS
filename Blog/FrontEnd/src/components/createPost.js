import React, {useState} from 'react';
import axios from 'axios';
import SuccessMessage from './successMessage';
import {useHistory} from 'react-router-dom';

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();


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



    return(

        <>
        <ThemeProvider theme={theme}>
          <Grid
            container
            component="main"
            justifyContent="center"
            sx={{ height: "100vh" }}
          >
            <CssBaseline />
  
            <Grid
              item
              xs={12}
              sm={8}
              md={5}
              component={Paper}
              elevation={6}
              square
            >
              <Box
                sx={{
                  my: 8,
                  mx: 4,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                  <BorderColorRoundedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Create Post
                </Typography>
                <Box component="form" noValidate onSubmit={null} sx={{ mt: 1 }}>
                  <form onSubmit={sendData} encType="multipart/form-data">
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="title"
                    label="Title"
                    name="title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    autoFocus
                  />
                  <TextField
                    id="outlined-multiline-flexible"
                    label="Content"
                    fullWidth
                    multiline
                    minRows={12}
                    value={content}
                    onChange={e => setContent(e.target.value)}
                  />
  
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Publish
                  </Button>
                  </form>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </ThemeProvider>
        {successMessage}
      </>
    )

}


export default CreatePost;
