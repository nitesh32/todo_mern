const mongoose = require('mongoose');

const itemschema= new mongoose.Schema({
    description:{
        type: String,
        required:true
    },
    date:{
        type: String,
        required:true
    },
    category:{
        type: String,
        required:true
    }
})

const items=mongoose.model('items',itemschema);

module.exports=items;