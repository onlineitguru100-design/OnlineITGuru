const categoryModel = require('../Model/CategoriesModel');

exports.createCategory = async (title, imageUrl) => {

  try {
    if (!title || !imageUrl) {
      return res.status(400).json({ error: " Title and Image URL are required" });
    }

    const existingCategory = await categoryModel.findOne({ title: { $regex: new RegExp(`^${title}$`, 'i') } });

    if (existingCategory) {
      throw new Error('Category with this title already exists');
    }
    
    const category = new categoryModel({ title, imageUrl })

    return await category.save();

  } catch (error) {
    throw new Error(error.message)
  }

}

exports.getAllCategories = async () => {
  try {
    return await categoryModel.find()
  } catch (error) {
    throw new Error('Errr Fetchhing Categories:' + error.message)
  }
};