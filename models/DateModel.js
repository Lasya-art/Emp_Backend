const mongoose = require('mongoose');


const DateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    
    date: {
        type: Date,
        required: true,
        trim: true
    },

    
    Employee_id: {
        type: String,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Date', DateSchema)