import React from "react";
import Grid from "@mui/material/Grid";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import {
  Container,
  CssBaseline,
  makeStyles,
  Card,
  Avatar,
  CardContent,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    // flexDirection: "column",
    alignItems: "center",
    justifyContent: 'center'
  },
  card: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingLeft: "25vw",
    paddingRight: "25vw",
    paddingBottom: "6.5vh",
    justifyContent: 'center'
  },
  cardContent: {
    flexGrow: 1,
  },
  avatar: {
    width: theme.spacing(25),
    height: theme.spacing(25),
    marginTop: "3vh",
  },

  motto: {
    marginTop: 10,
    textAlign: "center",
  },
  firstName: {
    textAlign: "center",
  },
  goalsCompleted: {
    textAlign: "center",
  },
  location: {
    textAlign: "center",
  },
  socialMedia: {
    display: "flex",
    marginTop: "40px",
    justifyContent: 'center',
    textAlign: "center",
  },
  socialMediaIcons: {
    // marginRight: "15px",
    // marginLeft: "15px",
    fontSize: "60px",
    // display: "flex",
    // width: "60px"
    textAlign: "center",
    
    
    // justifyContent: "center"
  },
}));

const Profile = () => {
  const classes = useStyles();
  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   axios.get('/posts/user_id') // change that to user name
  //   .then(res => {
  //     setPosts(res.data);
  //   })
  // }, []);

  return (
    <div>
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <div className={classes.paper}>
          <Card className={classes.card}>
            <Avatar
              alt="Profile Image"
              src={"https://bootdey.com/img/Content/avatar/avatar7.png"}
              className={classes.avatar}
            />


          
            <Grid container spacing={4} justifyContent="center" className={classes.socialMedia}>
              <Grid item xs={12} sm={6} md={3} lg={3} >
                <TwitterIcon className={classes.socialMediaIcons}/>
              </Grid>
              <Grid item xs={12} sm={6} md={3} lg={3} >
                <FacebookIcon className={classes.socialMediaIcons}/>
              </Grid>
              <Grid item xs={12} sm={6} md={3} lg={3} >
                <YouTubeIcon className={classes.socialMediaIcons}/>
              </Grid>
              <Grid item xs={12} sm={6} md={3} lg={3} >
                <InstagramIcon className={classes.socialMediaIcons}/>
              </Grid>
            </Grid>
          


            <CardContent className={classes.cardContent}>
              <Typography
                className={classes.firstName}
                noWrap
                gutterBottom
                variant="h3"
                component="h2"
              >
                [put name here]'s Profile
              </Typography>

              <Typography
                className={classes.goalsCompleted}
                noWrap
                gutterBottom
                variant="h4"
                component="h2"
              >
                Goals completed
              </Typography>
              <Typography
                className={classes.location}
                noWrap
                gutterBottom
                variant="h6"
                component="h2"
              >
                location
              </Typography>
              <Typography className={classes.motto}>about me</Typography>
            </CardContent>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default Profile;
