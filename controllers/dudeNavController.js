var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var urlencodedParser = bodyParser.urlencoded({extend: false});

module.exports = (app) => {

    app.get('/', (req,res) => {
        res.render('index');
    });

    app.get('/dude', (req,res) => {
        res.render('dude', {qs: req.query});
    });

    app.post('/dude', urlencodedParser, (req,res) => {
        console.log(req.body);
        res.render('contact-success', {data: req.body});
    });

    app.get('/profile/:name', (req,res) => {
        const data = {name: 'ben', age:23};
        res.render('profile', {person: req.params.name, data: data});
    });

    app.get('/slideShow', (req,res) => {
        res.render('slideShow');
    });
}