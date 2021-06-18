const express = require('express');
const router = express.Router();
const User = require('../models/user')
const bcrypt = require('bcryptjs');



// Rgister
router.post('/user/register', async (req,res) => {

    // check if email already exsits
    const emailExist = await User.findOne({email: req.body.email});

    if(emailExist)
        return res.status(400).send("Email already exists!");


    // encrypt password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);


    const user = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword 
        });


    try {
        await user.save(); 
        res.send('New user has been registered!');
        // res.send(user);
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
    
    // everything fine
    res.send(`${username} logged in!`);    

});



// Get all users
router.get('/user/users', (req,res) => {

    User.find({})
    .then(users => res.json(users))
    .catch(err => res.status(400).json(`Error: ${err}`));
});




module.exports = router;
