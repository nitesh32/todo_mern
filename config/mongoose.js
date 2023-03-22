const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todo_mern');

const db=mongoose.connection;

db.on('error',console.error.bind(console,'error here connecting to db'));

db.once('open',function(){
    console.log("succesfully opened db");
});
