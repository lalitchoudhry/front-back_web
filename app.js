const { urlencoded } = require("express");
const express = require("express");
const app = express();
const path = require("path");
const port = 80;

//EXPRESS SPECEFIC CONFIGURATION
app.use('/static', express.static('static'));//for serving static file
// app.use(express.urlencoded());

//TEMPLATE ENGINE- PUG CONFIGURATION
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views')); 

//ENDPOINT
app.get('/', (req, res) => {
    res.render('home.pug', { title: 'shit', message: 'You fucked up!'})
})
app.get('/join', (req, res) => {
    res.render('join.pug', { title: 'shit', message: 'You fucked up!'})
})
app.post('/join', (req, res) => {
    res.render('join.pug', { title: 'shit', message: 'You fucked up!'})
})

//LISTEN PORT
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})