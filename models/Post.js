const mongoose = require('mongoose');



const PostSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    message:{
        type: String,
        required: true
    },
    created:{
        type: Date,
        default: Date.now
    }
});

// This creates our model from the above schema, using mongoose's model method
module.exports = mongoose.model('Feedback', PostSchema);



