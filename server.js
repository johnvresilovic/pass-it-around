const express = require('express')
const app = express()
const port = 3000

let numberOfBottles = 99
let newNumber = 0

app.get('/', (req, res) => {
    newNumber = numberOfBottles - 1
    res.send(numberOfBottles + ' bottles of beer on the wall...' + `<p><a href="http://localhost:3000/${newNumber}">Take one down, pass it around...</a>`)
})

app.get('/:number_of_bottles', (req, res) => {
    newNumber = req.params.number_of_bottles
    if (newNumber == 0) {
        numberOfBottles = 99
        res.send('No more bottles of beer on the wall!' + `<p><a href="http://localhost:3000/">Click here to start over</a>`)
    } else {
        if (newNumber == 1) {
            res.send('1 bottle of beer on the wall...' + `<p><a href="http://localhost:3000/0">Take one down, pass it around...</a>`) 
        } else {
            res.send(newNumber + ' bottles of beer on the wall...' + `<p><a href="http://localhost:3000/${newNumber - 1}">Take one down, pass it around...</a>`)
        }
    }
})

app.listen(port,() => {
    console.log('Listening on port' , port)
})