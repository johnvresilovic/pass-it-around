const express = require('express');
const app = express();
const port = 3000;

let numberOfBottles = 99

app.get('/', (req, res) => {
    res.send(numberOfBottles + ' bottles of beer on the wall...' + `<p><a href="localhost:3000/">Take one down, pass it around...</a>`);
});

app.listen(port,() => {
    console.log('Listening on port' , port);
});