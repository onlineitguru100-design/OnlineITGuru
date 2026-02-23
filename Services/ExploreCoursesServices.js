const exploreCourseModel = require('../Model/ExploreCourseModel');

exports.createExploreCourse = async (title, description, courses) => {
  try {

const existingCategory = await exploreCourseModel.findOne({ title: { $regex: new RegExp(`^${title}$`, 'i') } });

    if (existingCategory) {
      throw new Error('Explore Course with this title already exists');
    }


    // Validate courses
    if (!courses || !Array.isArray(courses) || courses.length === 0) {
      throw new Error("Courses must be a non-empty array");
    }

    const exploreCourses = new exploreCourseModel({
      title,
      description,
      courses
    });

    return await exploreCourses.save();
return exploreCourses;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.getAllExploreCourse = async () => {
  try {
    return await exploreCourseModel.find().populate('courses');
  } catch (error) {
    throw new Error('Erorr Fetchhing ExploreCourse' + error.message)
  }
};