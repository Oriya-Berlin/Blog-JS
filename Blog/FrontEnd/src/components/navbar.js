import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import UserAuth from "./../context/auth-context";
import Post from "./post";

import AppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  icon: {
    margin: "20px", // not working, check it out
  },
  search: {
    justifyContent: "center",
    alignContent: "center",
  },
  menu: {},
}));


const Navbar = () => {

  const classes = useStyles();
  const history = useHistory();
  const { userCredentials, setUserCredentials } = useContext(UserAuth);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    if (localStorage.getItem("userCredentials"))
      setUserCredentials(JSON.parse(localStorage.getItem("userCredentials")));
  }, []);

  const logout = () => {
    setUserCredentials({
      user_id: null,
      username: null,
      email: null,
      token: null,
      isAuth: false,
    });

    // TODO: handle that, afte user token expired, we need to remove
    // 'userCredentials' from localStorage
    localStorage.removeItem("userCredentials");
    history.push("/user/login");
  };

  // TODO: change that name to result
  const [data, setData] = useState([]);

  const search = () => {
    axios
      .get(`/posts/search/${searchInput}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <CssBaseline />

      {/* NAVBAR */}
      <AppBar position="relative">
        <Toolbar className={classes.menu}>
          <MenuIcon sx={{ mr: 2 }} className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Oriya Berlin
          </Typography>

          <Link
            // variant="button"
            color="inherit"
            href="/posts"
            underline="none"
            sx={{ my: 1, mx: 1.5 }}
          >
            <Typography
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Home
            </Typography>
          </Link>
          {userCredentials.token ? (
            <>
              <Link
                // variant="button"
                color="inherit"
                href={`/user/profile/${userCredentials.user_id}`}
                underline="none"
                sx={{ my: 1, mx: 1.5 }}
              >
                <Typography
                  variant="h6"
                  color="inherit"
                  noWrap
                  sx={{ flexGrow: 1 }}
                >
                  Hi, {userCredentials.username}
                </Typography>
              </Link>

              <Link
                // variant="button"
                color="inherit"
                href={`/user/profile/${userCredentials.user_id}`}
                underline="none"
                sx={{ my: 1, mx: 1.5 }}
              >
                <Typography
                  variant="h6"
                  color="inherit"
                  noWrap
                  sx={{ flexGrow: 1 }}
                >
                  My Profile
                </Typography>
              </Link>

              <Link
                // variant="button"
                color="inherit"
                href="/posts/create"
                underline="none"
                sx={{ my: 1, mx: 1.5 }}
              >
                <Typography
                  variant="h6"
                  color="inherit"
                  noWrap
                  sx={{ flexGrow: 1 }}
                >
                  Create Post
                </Typography>
              </Link>

              <Link
                // variant="button"
                color="inherit"
                href="#"
                underline="none"
                sx={{ my: 1, mx: 1.5 }}
                onClick={(e) => logout()}
              >
                <Typography
                  variant="h6"
                  color="inherit"
                  noWrap
                  sx={{ flexGrow: 1 }}
                >
                  Log-out
                </Typography>
              </Link>
            </>
          ) : (
            <Link
              // variant="button"
              color="inherit"
              href="/user/login"
              underline="none"
              sx={{ my: 1, mx: 1.5 }}
            >
              <Typography
                variant="h6"
                color="inherit"
                noWrap
                sx={{ flexGrow: 1 }}
              >
                Login
              </Typography>
            </Link>
          )}

          <Link
            // variant="button"
            color="inherit"
            href="/about"
            underline="none"
            sx={{ my: 1, mx: 1.5 }}
          >
            <Typography
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              About
            </Typography>
          </Link>

          {/* SEARCH */}
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 300,
              height: 32,
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search"
              inputProps={{ "aria-label": "search" }}
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              type="search"
            />
            <IconButton
              type="submit"
              sx={{ p: "10px" }}
              aria-label="search"
              onClick={search()}
            >
              <SearchIcon />
            </IconButton>
          </Paper>
        </Toolbar>
      </AppBar>
      {/* here we put the results */}

      {/* <Search data={data}/> */}

      <div>
        {data.map((post, key) => (
          <Post post={post} key={key} />
        ))}
      </div>
    </div>
  );
};

export default Navbar;
