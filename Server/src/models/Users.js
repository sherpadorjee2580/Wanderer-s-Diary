const mongoose = require('mongoose');
const { Schema } = mongoose;
//mongoose.connect('mongodb://localhost:27017/muliVendorDb');

const UserSchema = new Schema({
  fullName: String, // String is shorthand for {type: String}
  address: Number,
  description: String,
  image: String,
  avatarName: String,
  email: String,
  password: String,
  role: String
});

const Users = mongoose.model('Users', UserSchema);
module.exports=Users
