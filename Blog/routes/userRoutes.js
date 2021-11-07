const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const connection = require('./../mySQLconnection');


require("dotenv").config();





// Register
router.post('/user/register', async (req,res) => {

    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.password;
    let fname = req.body.fname;
    let lname = req.body.lname;
    let image = req.body.image;

    // EMAIL and USERNAME are unique

    const emailValidationCMD = `SELECT email FROM users WHERE email = "${email}"`;
    await connection.query(emailValidationCMD, (err,data) => {

        if(err)
            console.log(err);
    
        if(data.length > 0)
            return res.send("This email already in use.");

        });

    const usernameValidationCMD = `SELECT username FROM users WHERE username = "${username}"`;
    await connection.query(usernameValidationCMD, (err,data) => {
            
        if(err)
            console.log(err);
        
        if(data.length > 0)
            return res.send("This username already in use.");
    
        });


    // encrypt password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);


    const insertCMD = `INSERT INTO users (username,email,password,fname,lname,image)
     VALUES ("${username}","${email}","${hashedPassword}","${fname}","${lname}","${image}") `;

    await connection.query(insertCMD, (err,data) => {

        if(err)
            console.log(err);
            
        res.send("New user has been registered!");
    });
})



// Login
router.post('/user/login', async (req,res) => {

    let email = req.body.email;
    let username = req.body.username;
    let password = req.body.password;

    // TODO: make sure that you added some validation logic at the FE, like "",etc

    const cmd = `SELECT * FROM users WHERE email = '${email}' OR username = "${username}" `;

     await connection.query(cmd, async (err,data) => {

        if(err)
            console.log(err); 
        
        console.log(data);

        if(data.length == 0)
            return res.send("Email/Username does not exists!");
        
        
        if(data.length == 1)
        {
            // check the password
            const passwordValidation = await bcrypt.compare(password, data[0].password);

            if(!passwordValidation)
                return res.status(400).send('Invalid password!');
            
            const userDetails = {
                username: data[0].username,
                email: data[0].email,
                fname: data[0].fname,
                lname: data[0].lname,
                image: data[0].image
            };
            
            const token = jwt.sign({username: data[0].username}, process.env.TOKEN, { expiresIn: '60s'});
            res.header('auth-token', token).json({user: userDetails, token: token});    
        }
        
        
    });

})



// GET all users
router.get('/users', async (req,res) => {

    await connection.query(`SELECT * FROM users`, (err,data) => {
        if(err) throw err;
        res.send(data);
    });
})



// ---------------------------------------------------------------------------
//                            NOT IN USE
// ---------------------------------------------------------------------------


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
