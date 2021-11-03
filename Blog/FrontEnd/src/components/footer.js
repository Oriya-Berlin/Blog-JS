import React from "react";
import Typography from "@mui/material/Typography";
import { CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "blue",
    padding: "50px 0",
  },
}));


const Footer = () => {

  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <footer className={classes.footer}>
        <Typography variant="h5" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="#fff">
          We can write something interesting here.
        </Typography>
      </footer>
    </>
  );
};


export default Footer;
