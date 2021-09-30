const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose")
const userRout = require("./routes/users")
const authRout = require("./routes/auth")
const productRout = require("./routes/product")
const cartRout = require("./routes/cart");
const orderRout = require("./routes/order");
const stripeRout = require("./routes/stripe");
const cors = require("cors")
dotenv.config()

mongoose.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true }
).then(()=>{
     console.log("Connected to MongoDB")}).catch((err=>console.log(err)));

app.use(cors())
app.use(express.json());

app.use("/api/auth", authRout)
app.use("/api/users", userRout);
app.use("/api/products", productRout);
app.use("/api/carts", cartRout);
app.use("/api/orders", orderRout);
app.use("/api/checkout", stripeRout);

const port = process.env.PORT || 5000
app.listen(port, ()=>{
    console.log(" App running on port "+ port)
});