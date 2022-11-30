const express = require('express')
const app = express()
const port = 3000

let numberOfBottles = 99

app.get('/', (req, res) => {
    res.send(numberOfBottles + ' bottles of beer on the wall...' + `<p><a href="localhost:3000/XXX">Take one down, pass it around...</a>`)
})

app.get('/:number_of_bottles', (req, res) => {
    numberOfBottles = req.params.number_of_bottles
    if (numberOfBottles == 0) {
        numberOfBottles = 99
        res.send('No more bottles of beer on the wall!' + `<p><a href="localhost:3000/">Click here to start over</a>`)
    } else {
        if (numberOfBottles == 1) {
            res.send(numberOfBottles + ' bottle of beer on the wall...' + `<p><a href="localhost:3000/XXX">Take one down, pass it around...</a>`) 
        } else {
            res.send(numberOfBottles + ' bottles of beer on the wall...' + `<p><a href="localhost:3000/XXX">Take one down, pass it around...</a>`)
        }
    }
})

app.listen(port,() => {
    console.log('Listening on port' , port)
})