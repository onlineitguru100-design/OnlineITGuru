const express = require('express');
const router = express.Router();
const sucessStoriesController = require('../Controller/SucessStoriesController')

router.post("/Create",sucessStoriesController.createSucessStore)//,upload.single('image')
router.get('/SucessStories', sucessStoriesController.getAllSucessStore);
// router.get('/:id',categoryController.getCategoryById)
 router.put("update/:id",  sucessStoriesController.updateSucessStore);

// router.get('/search',categoryController.getCategoriesBySearch)
 router.delete("/:id", sucessStoriesController.deleteSucessStore);

// router.put("/:productId/updateQuantity", categoryController.updateUserQuantity );
// router.get("/:productId/:userId", categoryController.getProductWithUserQuantity);

//router.get("/:categoryId/:userId", categoryController.getCategoryDetailsByCatUserId);

module.exports=router