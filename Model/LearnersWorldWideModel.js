const mongoose = require('mongoose');

const learnersWorldWideSchema = new mongoose.Schema({

  trustedBy: { type: String, default: ""},
  title: { type: String, default: ""},
  imageUrl:{type:String,default:null},
  description: { type: String, default: "" },
},
 { timestamps: true });

module.exports = mongoose.model("LearnersWorldWide", learnersWorldWideSchema);