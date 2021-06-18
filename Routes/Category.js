const express = require('express')

const router = express.Router();

const {createCategory} = require("../Controller/Category");
const {getAllCategory} = require("../Controller/Category");
const {getCategorybyId} = require("../Controller/Category");
const {removeCategory} = require("../Controller/Category");

router.param("categoryId",getCategorybyId);


router.post("/category/create/",createCategory);
router.get("/category/getallcategories/",getAllCategory);
// router.post("removeCategory",getAllCategory);
router.delete("/category/:categoryId",removeCategory);



module.exports = router;