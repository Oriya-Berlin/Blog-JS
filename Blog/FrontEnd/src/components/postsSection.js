import React, { useEffect, useState } from "react";
import Post from "./post";
import axios from "axios";

import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";



const PostSection = (props) => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("/posts", {
        headers: { "auth-token": localStorage.getItem("token") },
      })
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err));
  }, []);


  return (
    <div>
      <CssBaseline />
      {/* CARDS GRID */}
      <Container maxWidth="md">
        <Grid container spacing={4} justifyContent="center">
          {posts.map((post) => (
            <Post post={post} />
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default PostSection;
