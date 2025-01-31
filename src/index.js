const express = require("express");
const app = express();

require('dotenv').config();
const port = process.env.PORT || 3000;

const bodyParser = require("body-parser");
const cors = require("cors");
const postRoute = require("./routes/post.route");
const userRoute = require("./routes/user.route");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// match GET localhost:4000/
app.get("/", (req, res)=>{
  res.send("Sawasdee");
});

app.use("/posts", postRoute);
app.use("/users", userRoute);

app.listen(port, () => {
  console.log("App started at port: " + port);
});
