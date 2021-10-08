import axios from 'axios';


async function authenticateUser(){

    const token = {token: localStorage.getItem('token')};
    let user;

    await axios.post('/user/token', token)
    .then(res => { 
        // if(res.data.user._id)
        user = res.data.user;
        console.log(user);        
    }).catch(err =>{
      console.log(err)
    })

    return user;

}


export default authenticateUser;

