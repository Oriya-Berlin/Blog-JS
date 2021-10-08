const express = require('express');
const router = express.Router();
const User = require('../models/user')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

require("dotenv").config();




// Register
router.post('/user/register', async (req,res) => {

    // check if email already exsits
    const emailExist = await User.findOne({email: req.body.email});
    if(emailExist)
        return res.status(400).send("This email already exists!");


    // check if username exist
    const usernameExist = await User.findOne({username: req.body.username});
    if(usernameExist)
        return res.status(400).send("This username already exists!");



    // encrypt password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);


    const user = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
            fname: req.body.fname,
            lname: req.body.lname,
            image: req.body.image
        });


    try {
        await user.save(); 
        res.send('New user has been registered!');
    } 
    catch (error) {
        res.status(400).send(error);
        console.log(error); 
    }

});



// Login
router.post('/user/login', async (req,res) => {

    // check if user exsits 
    const user = await User.findOne({email: req.body.email});

    if(!user)
        return res.status(400).send("Email is not exists!");

    // check the password
    const passwordValidation = await bcrypt.compare(req.body.password, user.password);
        

    if(!passwordValidation)
        return res.status(400).send('Invalid password!');    
  

    const userDetails = {
        id:user._id,
        username: user.username,
        email: user.email
        };

    const token = jwt.sign({user_id: user._id}, process.env.TOKEN, { expiresIn: '60s'});
    res.header('auth-token', token).json({user: userDetails, token: token});

});



// Get all users
router.get('/user/users', (req,res) => {

    User.find({})
    .then(users => res.json(users))
    .catch(err => res.status(400).json(`Error: ${err}`));
});



// ---------------------------------------------------------------------------

// TODO: maybe we can put the verification on client side
router.post('/user/token', (req, res) => {
    
    const token = req.body.token;
    
    try {
        const verifiedUser = jwt.verify(token, process.env.TOKEN);
        res.json({user: verifiedUser});
    } catch (error) {
        res.status(400).send('Invalid Token!');
    }

});

// Log Out
router.delete('/user/logout', (req, res) => {
    // res.cookie('auth-token', '', {maxAge: 1});
    // res.header('auth-token', null);
    // res.redirect('/login');
    // localStorage.removeItem('auth-token');
    
});


// ---------------------------------------------------------------------------




module.exports = router;
