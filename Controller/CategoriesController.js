const categoryService = require('../Services/CategoriesServices')
const categoryModel = require('../Model/CategoriesModel')

exports.createCategory = async (req, res) => {
  try {

    const { title, imageUrl } = req.body;
    // const imageFile=req.file 
    if (!title || !imageUrl) {
      return res.status(400).json({ success: false, error: "Title and Image URL are required" });
    }

    //this line user for aws configuration
    // const imageUrl = imageFile.location;
    const category = await categoryService.createCategory(title, imageUrl);
    res.status(200).json({ success: true, category })

  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
    console.log("error", error);

  }
}