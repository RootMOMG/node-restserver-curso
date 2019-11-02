const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
require('./config/config');
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', function(req, res) {
    res.json('GET World')
})

app.post('/', function(req, res) {
    res.json('POST World')
})

app.put('/', function(req, res) {
    res.json('PUT World')
})

app.delete('/', function(req, res) {
    res.json('DELETE World')
})

app.listen(process.env.PORT, () => {
    console.log('Escuchando en el puerto', 3000);
});