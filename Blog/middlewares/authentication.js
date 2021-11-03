const jwt = require('jsonwebtoken');
require("dotenv").config();



module.exports = function (req, res, next)  {
    
    const token = req.header('auth-token');
    const authHeader = req.get('Authorization');


    if(!token){
        req.isAuth = false;
        console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')

        return res.status(401).send('Access Denied!');
    }
    try {

        const verifiedUser = jwt.verify(token, process.env.TOKEN);
        req.user = verifiedUser;
        req.isAuth = true;
        console.log(verifiedUser)
        console.log('bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb')
        next();

    } catch (error) {
        res.status(400).send('Invalid Token!');
    }
}

