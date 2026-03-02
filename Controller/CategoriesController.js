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

exports.getCategories = async (req, res) => {
  try {
    const categories = await categoryService.getAllCategories();
    res.status(200).json({ success: true, categories });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error Fetching Categories', error: error.message })
  }
};

exports.getCategoryById = async (req, res) => {
  try {

    const { id } = req.params;
    const category = await categoryService.getCategoryById(id);
    if (!category) {

      return res.json(404).json({ success: false, message: 'Category not found' });

    }
    res.status(200).json({ success: true, category });
  } catch (error) {
    console.error("Error fetching category:", error);
    if (!res.headersSent) {
      return res.status(500).json({ success: false, message: "Error fetching Category by ID", error: error.message });
    }
  }
}

exports.updateCategory = async (req, res) => {
  try {
    const { title, imageUrl } = req.body;

    const categoryId = req.params.id;

    const category = await categoryService.updateCategory(categoryId, title, imageUrl);
    res.status(200).json({ success: true, category });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }

}

exports.getCategoriesBySearch = async (req, res) => {
  try {
    const { name } = req.query;

    if (!name) {
      console.log(" Search query is missing");
      return res.status(400).json({ success: false, message: "Search query is required" });
    }
    console.log(` Searching for categories matching: "${name}"`);

    // Case-insensitive search for categories that contain the search
    const categories = await categoryModel.find(name, { $regex: name, $options: "i" }).populate('subcategories');

    if (categories.length === 0) {
      console.log(" No categories found");
      return res.status(404).json({ success: false, message: "No categories found" });
    }
    console.log(` Found ${categories.length} categories`);
    return res.status(200).json({ success: true, categories });

  } catch (error) {
    console.error(" Error searching categories:", error);
    return res.status(500).json({ success: false, message: "Error searching categories" });

  }
};

//Get by name 
exports.getCategorieyByName = async (req, res) => {
  try {
    const { title } = req.query;

    if (!title || title.trim() === "") {
      return res.status(400).json({ success: false, message: "Search query is required" });
    }

    console.log(` Searching for category: "${title}"`);

    const category = await categoryService.getCategorieyByName(title);

    if (!category) {
      console.log(` No category found for: "${title}"`);
      return res.status(404).json({ success: false, message: "Category Not Found" });
    }

    console.log(` Found category:`, category);
    return res.status(200).json({ success: true, category });
  } catch (error) {
    console.error(" Error fetching category by name:", error);
    return res.status(500).json({
      success: false,
      message: "Error fetching category by name",
      error: error.message,
    });
  }


}

exports.deleteCategory = async (req, res) => {
  try {
    const response = await categoryService.deleteCategory(req.params.id);
    res.status(200).json({success: true,response});
  } catch (error) {
    res.status(400).json({success: false, message: error.message });
  }
};

// exports.getCategoryDetailsByCatUserId = async (req, res) => {
//   try {
//     const { categoryId, userId } = req.params;

//     const category = await categoryModel.findById(categoryId).populate("subcategories").lean();

//     if (!category) {
//       return res.status(404).json({ message: "Category not found" });
//     }

//     // Map subcategories with user-specific quantity
//     const subcategories = category.subcategories.map((sub) => {
//       const userQuantity =
//         sub.userQuantities.find((u) => u.userId.toString() === userId)
//           ?.quantity || 0;

//       return {
//         _id: sub._id,
//         title: sub.title,
//         imageUrl: sub.imageUrl,
//         price: sub.price,
//         percentage: sub.percentage,
//         discountPrice: sub.discountPrice,
//         category: category._id,
//         userQuantity,
//       };
//     });

//     res.json({
//       success: true,
//       categoryId: category._id,
//       title: category.title,
//       imageUrl: category.imageUrl,
//       subcategories,
//     });
//   } catch (error) {
//     console.error("Error fetching category:", error);
//     res.status(500).json({
//       success: false,
//       message: "Error fetching category details",
//       error: error.message,
//     });
//   }
// };
