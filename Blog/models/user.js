const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({

    username: {type: String, required: true, unique: true}, // should be uniqe
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    fname: {type: String, required: false},
    lname: {type: String, required: false},
    image: {type: String, required: false}
});


const User = mongoose.model('user', userSchema);

module.exports = User;




