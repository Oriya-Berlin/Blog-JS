const express = require('express');
const router = express.Router();
const connection = require('./../mySQLconnection');



const authenticationNeeded = require('./../middlewares/authentication');

// TODO: handle the middlware "authenticationNeeded"


// GET all posts
router.get('/posts', async (req,res) => {
    
    await connection.query('SELECT * FROM posts', (err,data) => {
        if (err)
            throw err;

        res.send(data);
    });
});




// Create new post
router.post('/posts/create', async (req,res) => {
    
    let title  = req.body.title;
    let content = req.body.content;
    let date = new Date().toISOString().slice(0,10);
    let username = req.body.username;

    const cmd = `INSERT INTO posts (title, content, date, username) VALUES ("${title}", "${content}", "${date}", "${username}" )`;

    await connection.query(cmd, (err,data) => {
        if (err)
            throw err;

        res.send(data);
    });
});




// GET all posts by username
router.get('/posts/:username', async (req,res) => {

    await connection.query(`SELECT * FROM posts WHERE username = '${req.params.username}' `, (err,data) => {
        if(err) throw err;

        res.send(data);
    });
});




// GET single post by id
router.get('/posts/:id', async (req,res) => {

    await connection.query(`SELECT * FROM posts WHERE id = '${req.params.id}' `, (err,data) => {
        if(err) throw err;

        res.send(data);
    });
});




// DELETE post by post id
router.delete('/posts/delete/:id', async (req,res) => {

    await connection.query(`DELETE FROM posts WHERE id = ${req.params.id}`, (err,data) => {
        if (err) throw err;
        res.send('Post has been deleted');
    });
});




// UPDATE post by id
router.put('/posts/update/:id', async (req, res) => {

    const cmd = `UPDATE posts SET title="${req.body.title}",content="${req.body.content}" WHERE id="${req.params.id}" `;

    await connection.query(cmd, (err,data) => {
        if(err) throw err;
        res.send('Post has been updated!');
    });
});



module.exports = router;
