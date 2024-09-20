const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const  dotenv = require('dotenv');
const colors = require('colors');
const  connectDB = require('./config/db.js');
const authRouter = require("./routes/authRoutes/authRoutes.js");
const adminProductsRouter = require("./routes/adminRoutes/productsRoutes.js");
const adminOrderRouter = require("./routes/adminRoutes/orderRoutes.js");
const shopProductsRouter = require("./routes/shopRoutes/productsRoutes.js");
const shopCartRouter = require("./routes/shopRoutes/cartRoutes.js");
const shopAddressRouter = require("./routes/shopRoutes/addressRoutes.js");
const shopOrderRouter = require("./routes/shopRoutes/orderRoutes.js");
const shopSearchRouter = require("./routes/shopRoutes/searchRoutes.js");
const shopReviewRouter = require("./routes/shopRoutes/reviewRoutes.js");
const commonFeatureRouter = require("./routes/commonRoutes/featureRoutes.js");

dotenv.config();
const app = express();
app.use(express.json());
connectDB();
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);

app.use("/api/auth", authRouter);
app.use("/api/admin/products", adminProductsRouter);
app.use("/api/admin/orders", adminOrderRouter);
app.use("/api/shop/products", shopProductsRouter);
app.use("/api/shop/cart", shopCartRouter);
app.use("/api/shop/address", shopAddressRouter);
app.use("/api/shop/order", shopOrderRouter);
app.use("/api/shop/search", shopSearchRouter);
app.use("/api/shop/review", shopReviewRouter);
app.use("/api/common/feature", commonFeatureRouter);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`App running in ${process.env.PORT} mode on port ${PORT}`.yellow.bold)
);
