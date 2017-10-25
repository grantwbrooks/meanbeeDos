var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ItemSchema = new mongoose.Schema({
    item_content:  { type: String, required: true, minlength: 3},
    questions: [{type: Schema.Types.ObjectId, ref: 'Question'}]
}, {timestamps: true });

mongoose.model('Item', ItemSchema);
var Item = mongoose.model('Item')

// Use native promises, possibly not needed
mongoose.Promise = global.Promise;