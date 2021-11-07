const express = require('express');
const router = express.Router();
const connection = require('./../mySQLconnection');


// SEARCH route 
router.get('/search/:value', async (req,res) => {

    let postsCMD = `SELECT * FROM posts WHERE content LIKE "%${req.params.value}%" OR title LIKE "%${req.params.value}%" `;
    let posts;

    let usersCMD = `SELECT * FROM users WHERE username LIKE "%${req.params.value}%" OR fname LIKE "%${req.params.value}%" `;
    let users;


    await connection.query(postsCMD,(err,data) => {
        
        if(err)
            console.log(err);     
        posts = data;
    })

    await connection.query(usersCMD,(err,data) => {
        
        if(err)
            console.log(err);  
        users = data;

        res.send({users:users, posts:posts})
    })
    
});


module.exports = router;