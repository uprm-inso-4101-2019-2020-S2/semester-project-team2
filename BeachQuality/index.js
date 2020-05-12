const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

const port = process.env.PORT || 4000 || 5000;

// API
const beachRouter = require("./routes/api/beach");
const userRouter = require("./routes/api/user");

const server = express();

// Middleware
// Bodyparser Middleware
server.use(
  bodyParser.urlencoded({
    extended: false
  })
);
server.use(bodyParser.json());
server.use(cors());

// DB config
const db = require("./config").mongoURI;

// connect to MongoDB Atlas database
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => console.log("connected to database"))
  .catch(err => console.log(err));

// Use Routes
server.use("/api/beach", beachRouter);
server.use("/api/user", userRouter);

server.get("/express_backend", (req, res) => {
  res.send({ express: "YOUR BACKEND IS CONNECTED TO REACT" });
});

server.get("/getWeeklyUpdate", (req, res) => {
    return axios.get("https://mmvk4falrj.execute-api.us-west-2.amazonaws.com/v1/history/lab/4")
                  .then(response => console.log(response.data))
                  .catch(err => console.log(err));
});

server.listen(port, () => {
  console.log(`now listening for requests on port: ${port}`);
});
