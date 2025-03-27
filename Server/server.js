require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const errorMiddleware = require("./middlewares/error-middleware");
//routes
const authRoute = require("./routes/aurhRoute");
const categoryRoute = require("./routes/categoryRoute");
const subCategoryRoute = require("./routes/subCategoryRoute");
const productRoute=require("./routes/productRoute");


// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api/auth", authRoute);
// to category
app.use("/api/categories", categoryRoute);
//to subCategory
app.use("/api/subcategory", subCategoryRoute);
//to product
app.use("/api/product",productRoute);

//error middleware
app.use(errorMiddleware);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server is listning on port: ${port}`);
});
