const mongoose = require('mongoose');
const { Schema } = require('mongoose');


const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    videos: [{
        type: Schema.Types.ObjectId,
        ref: 'Video'
    }],
});

module.exports = mongoose.model('User', userSchema);