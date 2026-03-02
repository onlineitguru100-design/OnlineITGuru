const mongoose = require("mongoose");

const whyChooseUsSchema = new mongoose.Schema(
  {
    badgeTitle: {
      type: String,
      default: "Why Choose Us",
    },
    mainTitle: {
      type: String,
      required: true,
    },
    subTitle: {
      type: String,
      default: "",
    },
    features: [
      {
        title: {
          type: String,
          required: true,
        },
        description: {
          type: String,
          required: true,
        },
        icon: {
          type: String, // store icon name or image URL
          default: "",
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("WhyChooseUs", whyChooseUsSchema);


// const mongoose = require('mongoose');

// const everythingNeedSchema = new mongoose.Schema({

//   title: { type: String, default: ""},
//   imageUrl:{type:String,default:null},
//   description: { type: String, default: "" },
// },
//  { timestamps: true });

//  const everythingNeed = new mongoose.Schema({
//    header: { type: String, default: ""},
//    title:{type:String,default:null},
//    description: { type: String, default: "" },
//    everythingNeed: [everythingNeedSchema]
//  }, { timestamps: true });

// module.exports = mongoose.model("EverythingNeed", everythingNeed);