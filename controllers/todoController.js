var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//connect to database
mongoose.connect('mongodb://nikhilbenn:alliswell@ds159235.mlab.com:59235/todo-nik');

//Create a Schema - Blue print
var todoSchema = new mongoose.Schema({
    item:String
});

var Todo = mongoose.model('Todo', todoSchema);


// var data =[{item:'Wake up'}, {item: 'Brush your teeth'},{item:'Goto Bath'}];
var urlencodedParser = bodyParser.urlencoded({extend: false});

module.exports = (app) => {

    app.get('/todo', (req,res) => {
        //get data from mongoDB and pass it to view
        Todo.find({},(err,data) => {
            if(err) throw err;
            res.render('todo', {todos: data});
        });
    });

    app.post('/todo',urlencodedParser, (req,res) => {
        //Get data from view and add it to MongoDB
        var newTodo = Todo(req.body).save((err,data) => {
            if(err) throw err;
            res.json(data);
        });
    });

    app.delete('/todo/:item', (req,res) => {
        //Delete the requested item from Database
        Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove((err,data) => {
            if(err) throw err;
            res.json(data);
        });
    });

};