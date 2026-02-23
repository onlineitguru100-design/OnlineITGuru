const exploreCourseModel = require('../Model/ExploreCourseModel');
const exploreCoursesServices = require('../Services/ExploreCoursesServices');

exports.createExploreCourses = async (req, res) => {
  try {
    const { title, description, courses } = req.body;

    if (!title || !description) {
      return res.status(400).json({
        success: false,
        message: "Title and description are required"
      });
    }

    const exploreCourses =
      await exploreCoursesServices.createExploreCourse(
        title,
        description,
        courses
      );

    res.status(201).json({
      success: true,
      message: "Explore Courses created successfully",
      exploreCourses
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

exports.getAllExploreCoursesDetails = async (req, res) => {
  try {
    const exploreCourses = await exploreCoursesServices.getAllExploreCourse();
    res.status(200).json({ success: true, exploreCourses });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error Fetching ExploreCourses', error: error.message });
  }
};