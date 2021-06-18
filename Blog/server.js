const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();


const server = express();
const PORT = process.env.PORT || 8080;
const URL = process.env.URL;


server.use(cors());  // connect fe to be
server.use(express.json());


mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;

connection.once('open', () => console.log('Server / DB Connected! '));


// ------------------------------------------------------------------------ //


const postsRouter = require('./routes/postRoutes')
const userRouter = require('./routes/userRoutes');

server.use('/', postsRouter);
server.use('/', userRouter);


// ------------------------------------------------------------------------ //

server.listen(PORT, () => console.log(`SERVER is running on port ${PORT}`));


