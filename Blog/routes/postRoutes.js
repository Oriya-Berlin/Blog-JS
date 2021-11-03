const express = require('express');
const router = express.Router();
const Post = require('../models/post');

const authenticationNeeded = require('./../middlewares/authentication');


// get all posts
router.get('/posts' , async (req, res) => {

    await Post.find({})
    .then( posts => res.json(posts))
    .catch(err => res.status(400).json(`Error: ${err}`))
});



// create new post (******)
router.post('/posts/create', authenticationNeeded, (req,res) => {

    const newPost = new Post({
        title: req.body.title,
        author_id: req.body.author_id,
        author_username: req.body.author_username,
        content: req.body.content,
        date: new Date()
    }); 

    newPost.save()
    .then(() => res.json('New post has been created!'))
    .catch(err => res.status(400).json(`Error: ${err}`));

});



// find by post id
router.get('/posts/:id', async (req,res) => {

    await Post.findById(req.params.id)
    .then(post => res.json(post))
    .catch(err => res.status(400).json(`Error: ${err}`));
});



// update post by id
// TODO: check that route after i change her
router.put('/posts/update/:id', async (req,res) => {

    await Post.findById(req.params.id)
    .then(post => {
        post.title = req.body.title;
        post.author = req.body.author; // we probably need to delete that
        post.content = req.body.content;

        post.save()
        .then(post => res.json('Post has been updated successfuly'))
        .catch(err => res.status(400).json(`Error: ${err}`));
    })
    .catch(err => res.status(400).json(`Error: ${err}`));
});



// delete post by post id
router.delete('/posts/:id', async (req,res) => {

    await Post.findByIdAndDelete(req.params.id)
    .then( () => res.json('Post has been deleted!'))
    .catch(err => res.status(400).json(`Error: ${err}`));
});



// search post function 
// TODO: change author to author id or username or both
router.get('/posts/search/:value', async (req,res) => {
 
    //  await Post.find({author:req.params.value})
     await Post.find({author: new RegExp(req.params.value)})
    .then(posts => res.json(posts))
    .catch(err => res.status(400).json(`Error: ${err}`));

});




// get all posts by user id
// TODO: get all post by 'author_id' or 'author_username'
router.get('/posts/user_id', async (req,res) => {
    await Post.find({id: req.params.user_id})
    .then(posts => res.json(posts))
    .catch(err => res.status(400).json(`Error: ${err}`));
});


module.exports = router;
