//Loads express module
const express = require('express');
const bodyParser = require('body-parser');

const api = express();
const port = 3000;

api.use(express.static(__dirname + '/public'));
api.use(bodyParser.json());

api.listen(port, () => {
    console.log('API up and running!');
});

/*
api.post('/add', (req, res) => {
    console.log(req.body);
    res.send("It works!");
});
*/