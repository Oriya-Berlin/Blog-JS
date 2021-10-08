import React, {useEffect, useState} from 'react';
import Post from './post';
import axios from 'axios';



const Search = (props) => { // here we will get the search input


    const [data, setData] = useState([]); 



    // useEffect( () =>{

    //   axios.get(`/posts/search/${props.match.params.value}`)
    //   .then(res => setData(res.data))
    //   .catch(err => console.log(err));

    // }, []);



    return(
        <div>       
            {
                data.map( (post,key) => ( <Post post={post} key={key}/> ) )
            }          
        </div>
    )

}


export default Search;
