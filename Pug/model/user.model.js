const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema(
    {
        name:{
            type: String,
            maxlength: 100,
            required: true
        },
        email: {
            type: String,
            maxlength: 150,
            required:true
        },
        password: {
            type: String,
            minlength: 8,
            required:true
        }
    }
);


module.exports = mongoose.model('User',userSchema);