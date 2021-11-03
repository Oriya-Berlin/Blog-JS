import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import UserAuth from "./../context/auth-context";

const theme = createTheme();

const Login = () => {

  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { userCredentials, setUserCredentials } = useContext(UserAuth);

  const sendData = (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };

    axios
      .post("/user/login", user)
      .then((res) => {
        if (res.headers["auth-token"]) {
          setUserCredentials({
            user_id: res.data.user.id,
            username: res.data.user.username,
            email: res.data.user.email,
            token: res.data.token,
            isAuth: true,
          });

          // TODO: we need to ask Or Ohayun why that didn't updte
          // console.log(userCredentials);

          localStorage.setItem(
            "userCredentials",
            JSON.stringify({
              user_id: res.data.user.id,
              username: res.data.user.username,
              email: res.data.user.email,
              token: res.data.token,
              isAuth: true,
            })
          );

          history.push("/posts");
        } else {
          history.push("/user/login");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };


  return (
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
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box component="form" noValidate onSubmit={sendData} sx={{ mt: 3 }}>
                {/* <form onSubmit={sendData} encType="multipart/form-data"> */}
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                  />

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign In
                  </Button>
                {/* </form> */}
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="/user/register" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
};

export default Login;
