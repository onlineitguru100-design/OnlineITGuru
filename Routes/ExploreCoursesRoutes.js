const express = require('express');
const router = express.Router();
const exploreCoursesController = require('../Controller/ExploreCoursesController')

router.post("/Create",exploreCoursesController.createExploreCourses)//,upload.single('image')
router.get('/ExploreCourses', exploreCoursesController.getAllExploreCoursesDetails);
// router.get('/:id',categoryController.getCategoryById)
// router.put("/:id",  categoryController.updateCategory);
// router.get('/name/search',categoryController.getCategorieyByName)
// router.get('/search',categoryController.getCategoriesBySearch)
// router.delete("/:id", categoryController.deleteCategory);

// router.put("/:productId/updateQuantity", categoryController.updateUserQuantity );
// router.get("/:productId/:userId", categoryController.getProductWithUserQuantity);

//router.get("/:categoryId/:userId", categoryController.getCategoryDetailsByCatUserId);

module.exports=router