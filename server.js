const express = require('express');
const app = express();
const port = 3000;

let numberOfBottles = 99

app.get('/', (req, res) => {
    res.send(numberOfBottles + ' bottles of beer on the wall...');
});



app.listen(port,() => {
    console.log('Listening on port' , port);
});