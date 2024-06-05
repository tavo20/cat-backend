const mongoose = require('mongoose');

import { Schema, model } from 'mongoose';
import bcry from 'bcryptjs';



const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
}, {
    timestamps: true
});


// Method to compare password
userSchema.methods.comparePassword = function(enteredPassword: string, userPassword: string) {
    return bcry.compare(enteredPassword, userPassword);
};

userSchema.methods.encryptPassword = async (password: string): Promise<string> => {
  const salt = await bcry.genSalt(10);
  return bcry.hash(password, salt)
};

// module.exports = mongoose.model('User', userSchema);
export default model('User', userSchema);

