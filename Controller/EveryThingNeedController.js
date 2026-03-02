const WhyChooseUs = require('../Model/EveryThingNeedModel');
const whyChooseUsService = require('../Services/EveryThingNeedServices');


// Create
exports.create = async (req, res) => {
  try {
    const result = await whyChooseUsService.createWhyChooseUs(req.body);

    res.status(201).json({
      success: true,
      message: "WhyChooseUs created successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating WhyChooseUs",
      error: error.message,
    });
  }
};

// Get Latest
exports.getLatest = async (req, res) => {
  try {
    const result = await whyChooseUsService.getWhyChooseUs();

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching WhyChooseUs",
      error: error.message,
    });
  }
};

// Get All
exports.getAll = async (req, res) => {
  try {
    const result = await whyChooseUsService.getAllWhyChooseUs();

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching WhyChooseUs",
      error: error.message,
    });
  }
};

exports.addFeature = async (req, res) => {
  try {
    const result = await WhyChooseUs.findByIdAndUpdate(
      req.params.id,
      {
        $push: {
          features: {
            title: req.body.title,
            description: req.body.description,
            icon: req.body.icon
          }
        }
      },
      { new: true }
    );

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Document not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Feature added successfully",
      data: result
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error adding feature",
      error: error.message
    });
  }
};

// Update
exports.update = async (req, res) => {
  try {
    const result = await whyChooseUsService.updateWhyChooseUs(
      req.params.id,
      req.body
    );

    res.status(200).json({
      success: true,
      message: "Updated successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error updating",
      error: error.message,
    });
  }
};

// Delete
exports.remove = async (req, res) => {
  try {
    await whyChooseUsService.deleteWhyChooseUs(req.params.id);

    res.status(200).json({
      success: true,
      message: "Deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error deleting",
      error: error.message,
    });
  }
};

// exports.createEveryThingNeed = async (req, res) => {
//   try {
//     const {header, title, description, everythingNeed } = req.body;

//     if (!title || !header || !description) {
//       return res.status(400).json({
//         success: false,
//         message: "Title, description and imageUrl are required"
//       });
//     }

//     const everyThing =
//       await everyThingNeedServices.createEveryThingNeed(
//         header, title, description, everythingNeed 
//       );

//     res.status(201).json({
//       success: true,
//       message: "EveryThingNeed created successfully",
//       everyThing
//     });

//   } catch (error) {
//     res.status(400).json({
//       success: false,
//       message: error.message
//     });
//   }
// };

// exports.getAllEveryThingNeedDetails = async (req, res) => {
//   try {
//     const exploreCourses = await everyThingNeedServices.getAllEveryThingNeed();
//     res.status(200).json({ success: true, exploreCourses });
//   } catch (error) {
//     res.status(500).json({ success: false, message: 'Error Fetching EveryThingNeed', error: error.message });
//   }
// };