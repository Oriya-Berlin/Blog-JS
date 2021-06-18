const express = require('express');
const router = express.Router();
const Post = require('../models/post');



// get all
router.get('/posts',async (req, res) => {

    await Post.find({})
    .then( posts => res.json(posts))
    .catch(err => res.status(400).json(`Error: ${err}`))
});



// create new post
router.post('/create', (req,res) => {

    const newPost = new Post({
        title: req.body.title,
        author: req.body.author,
        content: req.body.content,
        date: new Date()
    }); 

    newPost.save()
    .then(() => res.json('New post has been created!'))
    .catch(err => res.status(400).json(`Error: ${err}`));

});



// find by id
router.get('/posts/:id', async (req,res) => {

    await Post.findById(req.params.id)
    .then(post => res.json(post))
    .catch(err => res.status(400).json(`Error: ${err}`));
});



// update
router.put('/posts/update/:id', async (req,res) => {

    await Post.findById(req.params.id)
    .then(post => {
        post.title = req.body.title;
        post.author = req.body.author;
        post.content = req.body.content;

        post.save()
        .then(post => res.json('Post has been updated successfuly'))
        .catch(err => res.status(400).json(`Error: ${err}`));
    })
    .catch(err => res.status(400).json(`Error: ${err}`));
});



// delete
router.delete('/:id', async (req,res) => {

    await Post.findByIdAndDelete(req.params.id)
    .then( () => res.json('Post has been deleted!'))
    .catch(err => res.status(400).json(`Error: ${err}`));
});



// search post function
router.get('/posts/search/:value', async (req,res) => {

    //  await Post.find({author:req.params.value})
     await Post.find({author: new RegExp(req.params.value)})
    .then(post => res.json(post))
    .catch(err => res.status(400).json(`Error: ${err}`));

});



module.exports = router;
