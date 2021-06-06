const express = require('express')

const router = express.Router();

const {createCategory} = require("../Controller/Category");


router.post("/category/create/",createCategory);



module.exports = router;