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

exports.getCategoryById = async (id) => {
  try {
    return await categoryModel.findById(id);
  } catch (error) {
    console.error("Database error while fetching category:", error);
    throw new Error("Database error: " + error.message);
  }
};


//upadte category

exports.updateCategory = async (categoryId, title, imageUrl) => {
  try {
    const category = await categoryModel.findById(categoryId);
    if (!category) throw new Error('Categroy not found')
    // Update name if provided
    // const { title, imageUrl } = updateData;

    if (title) {
      category.title = title;
    }

    if (imageUrl) {
      // If the category already has an image in S3, delete it before updating

      category.imageUrl = imageUrl;
    }
    if (title || imageUrl) {
      return await category.save();
    } else {
      throw new Error('No valid fields provided for update');
    }

  } catch (error) {
    throw new Error(error.message);

  }
}

exports.getCategorieyByName = async (title) => {
  try {
    return await categoryModel.findOne({
      title: { $regex: new RegExp(title, "i") } // Case-insensitive search
    }).populate('subcategories');
  } catch (error) {
    throw new Error("Error fetching category by name: " + error.message);
  }
}

exports.deleteCategory = async (categoryId) => {
  try {
    console.log(" Checking if category exists...");

    // Find the category first
    const category = await categoryModel.findById(categoryId);
    if (!category) {
      throw new Error("Category not found");
    }

    console.log(" Category found. ID:", categoryId);

    await categoryModel.findByIdAndDelete(categoryId);
    console.log(" Category deleted successfully.");

    return { success: "true", message: "Category and Subcategories,deleted successfully" };
  } catch (error) {
    console.error(" Error deleting category:", error.message);
    throw new Error("Error deleting category: " + error.message);
  }
};