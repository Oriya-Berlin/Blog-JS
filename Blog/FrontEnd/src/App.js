import './App.css';
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



function App() {

  return (

    <div className="App">

      <Navbar/> 
      <Route exact path="/" component={PostSection}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/posts" component={PostSection}/>
      <Route exact path="/posts/:id" component={SinglePostPage}/> 
      <Route exact path='/posts/update/:id' component={EditPost}/>
      <Route exact path='/posts/search/:value' component={Search}/>
      <Route path="/create" component={CreatePost}/> 
      <Footer/>
      
    </div>

  );
}



export default App;
