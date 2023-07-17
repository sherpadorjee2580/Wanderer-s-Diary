const mongoose = require('mongoose');
const { Schema } = mongoose;
//mongoose.connect('mongodb://localhost:27017/muliVendorDb');

const productSchema = new Schema({
  productName: String, // String is shorthand for {type: String}
  productPrice: Number,
  description: String,
  image: String,
  category: String,
  flag: {type: String, default:'valid'}
});

const Products = mongoose.model('Product', productSchema);
module.exports=Products