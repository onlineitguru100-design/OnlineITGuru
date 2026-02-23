const mongoose = require('mongoose');




const exploreCoursesSchema = new mongoose.Schema({

  title: { type: String, default: "" },
  description: { type: String, default: "" },
  courses: [
    { type: mongoose.Schema.Types.ObjectId, 
      ref: 'Courses', required: true, }]
},
 { timestamps: true });

module.exports = mongoose.model('ExploreCourses', exploreCoursesSchema);

const singleCourseSchema = new mongoose.Schema({
  title: String,
  imageUrl: String,
  description: String,
  program: String,
  ratings: String,
  learners: String,
  courseName: String,
  assignments: String,
  projects: String,
  reviews: String
});

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  description: String,
  courses: [singleCourseSchema]
}, { timestamps: true });

module.exports = mongoose.model("Course", courseSchema);