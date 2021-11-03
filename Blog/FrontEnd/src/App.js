import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import {Route} from 'react-router-dom';


import Navbar from './components/navbar';
import Footer from './components/footer';
import PostSection from './components/postsSection';
import CreatePost from './components/createPost';
import SinglePostPage from './components/singlePostPage';
import EditPost from './components/editPost';
import Search from './components/search';
import About from './components/about';
import Register from './components/register';
import Login from './components/login';
import Profile from './components/profile';


// export const UserAuth = React.createContext({
//   userCredentials:
//   {
//     user:null,
//     token:null,
//     isAuth: false
//   },
//   setUserCredentials: () => {}
// });

import UserAuth from './context/auth-context';

function App() { // maybe change to arrow function

  const [userCredentials, setUserCredentials] = useState({
    user_id: null,
    username: null,
    email: null,
    token: null,
    isAuth: false
  });


  return (

    <div>

      <UserAuth.Provider value={{userCredentials, setUserCredentials}}>

          <Navbar/> 

          <Route exact path="/" component={PostSection}/>

          <Route exact path="/about" component={About}/>

          {/* Users */}
          <Route exact path="/user/register" component={Register}/>
          <Route exact path="/user/login" component={Login}/>
          <Route exact path="/user/profile/:user_id" component={Profile}/>

          {/* Posts */}
          <Route exact path='/posts' component={PostSection}/>
          <Route exact path='/posts/create' component={CreatePost}/> 
          <Route exact path='/posts/:id' component={SinglePostPage}/> 
          <Route exact path='/posts/update/:id' component={EditPost}/>
          <Route exact path='/posts/search/:value' component={Search}/>
          {/* <Route exact path='/posts/create/new' component={CreatePost}/>  */}

      </UserAuth.Provider>
      <Footer/>
      
    </div>

  );
}



export default App;
