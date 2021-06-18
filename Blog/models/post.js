const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const postSchema = new Schema({

    title: {type: String, required: true},
    author: {type: String, required: true},
    content: {type: String, required: true},
    date: {type: Date, required: true}
});


const Post = mongoose.model("post", postSchema);


module.exports = Post;
