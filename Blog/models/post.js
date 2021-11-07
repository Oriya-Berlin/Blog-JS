const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const postSchema = new Schema({

    title: {type: String, required: true},
    author_id: {type: String, required: true},
    author_username: {type: String, required: true},
    content: {type: String, required: true},
    date: {type: Date, required: true}
});


const Post = mongoose.model("post", postSchema);


module.exports = Post;




// CREATE TABLE users(
//     username varchar(255) NOT NULL UNIQUE,
//     email varchar(255) NOT NULL UNIQUE,
//     password varchar(255) NOT NULL,
//     fname varchar(255),
//     lname varchar(255),
//     image varchar(255),
//     PRIMARY KEY(username)
// );



// INSERT INTO users (id, username, email, password, fname, lname, image)
// VALUES (2 ,'Cardinal2', 'Tom B. Erichsen2', 'Skagen 212', 'Stavanger2', '40062', 'Norway2');


