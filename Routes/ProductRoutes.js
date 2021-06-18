const express = require("express");
const router = express.Router();

const {
  getProductById,
  createProduct,
  getAllproduct,
  getProduct,
//   photo,
  // updateProduct,
  deleteProduct,
//   getAllProducts,
//   getAllUniqueCategories
} = require("../controller/productController");


//all of params

router.param("productId", getProductById);
router.get("/product/:productId", getProduct);

const {getProductbyId} = require("../Controller/ProductController");
const {removeProduct} = require("../Controller/ProductController");

//all of actual routes
//create route
router.post("/product/create",createProduct);
router.get("/product",getAllproduct);
router.delete("/product/:productId",removeProduct);
// router.get("/product",getAllproduct);

// // read routes



// //delete route
// router.delete("/product/:productId", deleteProduct);



module.exports = router;
