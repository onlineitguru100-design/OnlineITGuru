const mongoose = require('mongoose');

const everythingNeedSchema = new mongoose.Schema({

  title: { type: String, default: ""},
  imageUrl:{type:String,default:null},
  description: { type: String, default: "" },
},
 { timestamps: true });

module.exports = mongoose.model("EverythingNeed", everythingNeedSchema);