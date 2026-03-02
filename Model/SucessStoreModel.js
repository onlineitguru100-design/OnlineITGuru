const mongoose = require("mongoose");

const sucessStoriesSchema = new mongoose.Schema(
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
    company: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      default: 5,
    },
    review: {
      type: String,
      required: true,
    },
    fromRole: {
      type: String, // Marketing Analyst
    },
    toRole: {
      type: String, // Data Scientist
    },
    imageUrl: {
      type: String,
    },
    videoUrl: {
      type: String,
    },
},
],
  },
  { timestamps: true }
);

module.exports = mongoose.model("SucessStories", sucessStoriesSchema);