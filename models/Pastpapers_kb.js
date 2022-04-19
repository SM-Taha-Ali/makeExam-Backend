const mongoose = require('mongoose');
const { Schema } = mongoose;

const PastpapersKBSchema = new Schema({
    year: {
        type: String,
        required: true
    },
    section: {
        type: String,
        required: true
    },
    marks: {
        type: Number,
        required: true
    },
    question: {
        type: String,
        required: true
    },
    subParts: {
        type: Array,
        default: []
    }
});

const PastpapersKB = mongoose.model('PastpapersKB', PastpapersKBSchema)

PastpapersKB.createIndexes();

module.exports = PastpapersKB;