const mongoose = require('mongoose');


const categorySchema = new mongoose.Schema({

  title: { type: String, required: true, unique: true },
  imageUrl:{type:String,default:null},
 
},
 { timestamps: true });

module.exports = mongoose.model('Categories', categorySchema);