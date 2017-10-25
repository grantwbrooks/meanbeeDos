/////// if one to many do sorta like this ///////
var mongoose = require('mongoose');
const Schema = mongoose.Schema;
// define Question Schema
var QuestionSchema = new mongoose.Schema({
    _item: {type: Schema.Types.ObjectId, ref: 'Item'},
    name: {type: String },
    question_content: {type: String, required: true },
    option1: {type: String },
    answers: {type: []}
}, {timestamps: true });
// set our models by passing them their respective Schemas
mongoose.model('Question', QuestionSchema);
// store our models in variables
var Question = mongoose.model('Question');

// Use native promises, possibly not needed
mongoose.Promise = global.Promise;

