const express = require('express');
const todoController = require('./controllers/todoController');
const dudeNavController = require('./controllers/dudeNavController');
const app = express();
var port = process.env.PORT || 3000;

//setting up template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));
app.use('/cssFiles', express.static('cssFiles'));
app.use('/SlideShow', express.static('SlideShow'));

//fire controllers
todoController(app);
dudeNavController(app);

//listening to port
app.listen(port);
console.log('You are listening to port 3000');
