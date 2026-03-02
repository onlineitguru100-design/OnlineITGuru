const coursesSchema = new mongoose.Schema({

  title: { type: String, default: "" },
  imageUrl:{type:String,default:null},
  description: { type: String, default: "" },
  program: { type: String, default: "" },
  ratings: { type: String, default: "" },
  learners: { type: String, default: "" },
  courses: { type: String, default: "" },
  assignments: { type: String, default: "" },
  projects: { type: String, default: "" },
  reviews: { type: String, default: "" },
 
},
 { timestamps: true });

module.exports = mongoose.model('Courses', coursesSchema);

