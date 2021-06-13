const express = require('express')

const router = express.Router();

const {createCategory} = require("../Controller/Category");
const {getAllCategory} = require("../Controller/Category");



router.post("/category/create/",createCategory);
router.get("/category/getallcategories/",getAllCategory);



module.exports = router;