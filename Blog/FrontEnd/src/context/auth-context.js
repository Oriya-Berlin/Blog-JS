import { createContext } from "react";

const authContext = createContext({
    userCredentials:{
    user_id: null,
    username: null,
    email: null,
    token: null,
    isAuth: false
  },
  setUserCredentials: () => {}
});

export default authContext;