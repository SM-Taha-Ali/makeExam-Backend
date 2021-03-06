const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  firstname: {
      type: String,
      required: true
  },
  lastname: {
      type: String,
      required: true
  },
  email: {
      type: String,
      unique: true,
      required: true
  },
  password: {
      type: String,
      required: true
  },
  role: {
    type: String,
    default: "User"
  },
  subStatus: {
      type: Boolean,
      default: true
  }
});

const User = mongoose.model('user',UserSchema)

User.createIndexes();

module.exports = User;