// EXPRESS STUFF
const express = require('express');
const cors = require('cors');

// INITIALIZE SERVER
const app = express();

// ATTACH MIDDLEWARE
app.use(cors());
app.use(express.static('html'))

// EXPOSE ON PORT
const port = 3000;

// START SERVER
app.listen(port, () => {
    console.log('LISTENING ON PORT ' + port)
})