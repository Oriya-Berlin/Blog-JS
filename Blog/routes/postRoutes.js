const express = require('express');
const router = express.Router();
const Post = require('../models/post');



// get all
router.get('/posts',(req, res) => {

    Post.find({})
    .then( post => res.json(post))
    .catch(err => res.status(400).json(`Error: ${err}`))
});



// create new post
router.post('/create', (req,res) => {

    const newPost = new Post({
        title: req.body.title,
        author: req.body.author,
        content: req.body.content
    }); 

    newPost.save()
    .then(() => res.json('New post created and saved!'))
    .catch(err => res.status(400).json(`Error: ${err}`));

});



// find by id
router.get('/:id', (req,res) => {
    Post.findById(req.params.id)
    .then(post => res.json(post))
    .catch(err => res.status(400).json(`Error: ${err}`));
});



// update
router.put('/update/:id', (req,res) => {
    Post.findById(req.params.id)
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
router.delete('/:id', (req,res) => {
    Post.findByIdAndDelete(req.params.id)
    .then( () => res.json('Post has been deleted!'))
    .catch(err => res.status(400).json(`Error: ${err}`));
});



module.exports = router;
