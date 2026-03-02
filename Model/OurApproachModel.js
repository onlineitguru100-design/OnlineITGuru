const mongoose = require("mongoose");

const stepSchema = new mongoose.Schema(
  {
    stepNumber: {
      type: Number,
      required: true,
    },
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
  { _id: true }
);

const journeySchema = new mongoose.Schema(
  {
    badgeTitle: {
      type: String,
      default: "Our Approach",
    },
    mainTitle: {
      type: String,
      required: true,
    },
    subTitle: {
      type: String,
      default: "",
    },
    steps: [stepSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Journey", journeySchema);