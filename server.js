const path = require("path");
const express = require("express");
const connectDb = require("./config/db");

const app = express();

//call db
connectDb();

const port = process.env.PORT || 3000;

///public Route Defined
const publicRoute = path.join(__dirname, "./public");

//static pages
app.use(express.static(publicRoute));

app.listen(port, () => console.log(`Server running on port ${port}`));
