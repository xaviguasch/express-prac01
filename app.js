const express = require('express')
const app = express()


app.get('/', function(req, res) {
    res.send('Hi there, welcome to this practice!')
})

app.get('/speak/:animalName', function(req, res) {
    const sounds = {
        pig: 'Oink',
        cow: 'Moo',
        dog: 'Wof Wof!',
        cat: 'Meooooww',
        goldfish: '...'
    }
    const animal = req.params.animalName.toLowerCase()
    const sound = sounds[animal]

    res.send(`The ${animal} says "${sound}"`)   
})

app.get('/repeat/:wordName/:numberOfTimes', function(req, res) {
    const word = req.params.wordName
    const num = req.params.numberOfTimes

 

    res.send(`${word.repeat(num)}`)
})

app.get('*', function(req, res) {
    res.send('Sorry, page not found... What are you doing with your life?')
})






app.listen(3000, 'localhost', function() {
    console.log('server has started, listening on port 3000');
})