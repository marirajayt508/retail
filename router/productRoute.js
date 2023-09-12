const router = require("express").Router()
const product = require("../controller/productController")

router.route("/addproduct")
.post(product.addproduct);

router.route("/getallproduct")
.get(product.getallproduct);

router.route("/deleteproduct")
.delete(product.deleteproduct);

router.route("/editproduct")
.put(product.updateproduct);

//Export Module
module.exports = router;