import React from "react";
import { Link } from "react-router-dom";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";

const Post = ({ post }) => {

  const date = new Date(post.date);

  return (
    <Grid item key={post.post_id} xs={12} sm={12} md={12}> {/* xs = mobile,sm = tablet, md = pc */}
      <CssBaseline />
      <Card>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              A
            </Avatar>
          }
          title={post.title}
          subheader={date}
        />

        <CardMedia
          image="https://bootdey.com/img/Content/avatar/avatar7.png"
          title="random image"
        />
        <CardContent>
          <Typography gutterBottom>{post.author_username}</Typography>

          <Typography>{post.content}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            {/* <Link className="btn btn-info" to={`/posts/${post._id}`}>Read</Link> */}
            Read
          </Button>
          <Button size="small" color="success">
            Buy
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Post;
