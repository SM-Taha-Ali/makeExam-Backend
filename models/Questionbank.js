const mongoose = require('mongoose');
const {Schema} = mongoose;

const QustionBankSchema = new Schema({

    question:{
        type : String,
        required: true
    },

    subParts: {

        type: Array,
        default: []
    },
    paperType:{
        type: String,
        required: true
    },
    subject:{
        type: String,
        required: true
    },
    questionNo: {
        type: Number,
        required: true
    }

})

const QuestionBank = mongoose.model('QuestionBank.js',QustionBankSchema)
QuestionBank.createIndexes()
module.exports = QuestionBank;
