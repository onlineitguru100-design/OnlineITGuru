const mongoose = require("mongoose");

const expertSchema = new mongoose.Schema(
  {
     badgeTitle: {
      type: String,
      default: "Success Stores",
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
    name: {
      type: String,
      required: true,
    },
    designation: {
      type: String,
      required: true,
    },
    company: {
      type: String, // Ex-Google, Ex-AWS etc
    },
    imageUrl: {
      type: String,
    },
    linkedinUrl: {
      type: String,
    },
    skills: [
      {
        type: String,
      },
    ],
    experienceYears: {
      type: Number,
      default: 0,
    },
    students: {
      type: String, // 5K+, 8K+
    },
    rating: {
      type: Number,
      default: 0,
    },
    },
],
  },
  
  { timestamps: true }
);

module.exports = mongoose.model("OurExpert", expertSchema);