import React, {useEffect, useState} from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import './components/navbar'
import Navbar from './components/navbar';
import Footer from './components/footer';
import PostSection from './components/postsSection';
import CreatePost from './components/createPost';
import {Route} from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Navbar/> 
      <Route path="/posts" component={PostSection}/>
      <Route path="/create" component={CreatePost}/>
      Hello BLOG!
      <br/>
      
      <Footer/>
    </div>
  );
}

export default App;
