const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const _ = require("underscore");
const axios = require("axios");
const passport = require("passport");
const date = new Date();

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

// Passport config
require("./services/config/passport")(passport);

// DB config
const db = require("./services/config/mongo").mongoURI;

// connect to MongoDB Atlas database
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => console.log("connected to database"))
  .catch(err => console.log(err));
mongoose.set("useFindAndModify", false);

// Use Routes
server.use("/api/beach", beachRouter);
server.use("/api/user", userRouter);

server.get("/express_backend", (req, res) => {
  res.send({ express: "YOUR BACKEND IS CONNECTED TO REACT" });
});

//Fetch beach data from The Swim Guide .org
const request = require("request");
const cheerio = require("cheerio");
var data = [];
var pageNumber = 1;

function fetchBeaches() {
  for (i = 0; i < 2; i++) {
    request(
      `https://www.theswimguide.org/beaches/puerto-rico?page=${pageNumber}#beaches-table`,
      (err, res, html) => {
        if (!err && res.statusCode === 200) {
          const $ = cheerio.load(html);

          const mainArea = $(".sg-beaches-nearby-table-row").each((i, elem) => {
            const attribs = JSON.parse(
              JSON.stringify(
                elem.children[7].children[1].children[1].children[0].attribs
              )
            );
            const colorAttr = JSON.stringify(attribs["class"]);
            let color = "gray";

            if (colorAttr.endsWith('green"')) {
              color = "green";
            } else if (colorAttr.endsWith('yellow"')) {
              color = "yellow";
            } else if (colorAttr.endsWith('red"')) {
              color = "red";
            }

            const beachData = {
              name: elem.children[3].children[1].children[0].children[0].data,
              image: "some image",
              location:
                elem.children[3].children[3].children[0].data + " Puerto Rico",
              quality: color
            };

            let exists = false;
            data.forEach((beach, i) => {
              if (_.isMatch(beach, { name: beachData.name })) {
                exists = true;
                return;
              }
            });
            if (!exists) {
              data.push(beachData);
              postBeach(beachData);
            }
          });
        }
      }
    );
    pageNumber++;
  }
}

// Fetches the beaches every week (604800000 Milliseconds)
setInterval(async () => {
  await fetchBeaches();
}, 604800000);

//Post beach data to db
const postBeach = beach => {
  request.post(
    `http://localhost:4000/api/beach/addBeach/${beach.name}/${beach.image}/${beach.location}/${beach.quality}`,
    (err, res, html) => {
      if (err) {
        console.log(err);
      }
    }
  );
};

server.listen(port, () => {
  console.log(`now listening for requests on port: ${port}`);
});
