const Category = require("../Model/Category")


  
  exports.createCategory = (req, res) => {
    const category = new Category(req.body);
    category.save((err, backend_category) => {
      if (err) {
        return res.status(400).json({
          error: "NOT able to save category in DB"
        });
      }
      res.json({backend_category });
    });
  };

  exports.getAllCategory = (req, res) => {
   Category.find().exec((err,categories) => {
      if (err) {
        return res.status(400).json({
          error: "No categories found"
        });
      }
      res.json({categories });
    });
  };

  
  