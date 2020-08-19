let mongoose = require('mongoose');
let Schema = mongoose.Schema;


let articleSchema = new Schema(
    {
        "title": {
            type: String,
            maxlength: 100,
            required: true
        },
        "author": {
            type: String,
            required: true
        },
        "date": {
            type: Date,
            default: Date.now,
            required: [true,"Date is required"]
        },
        "body": {
            type: String,
            required: true
        }
    }
);

let Articles = module.exports = mongoose.model('Articles', articleSchema);