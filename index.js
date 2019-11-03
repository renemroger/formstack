const Express = require("express");
const App = Express();
const BodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const cors = require("cors");
const axios = require("axios");
const morgan = require("morgan");
require("dotenv").config();

morgan(":method :url :status :res[content-length] - :response-time ms");

App.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(Express.static("public"));

App.get("/api/submission", (req, res) => {
  axios
    .get(
      `https://www.formstack.com/api/v2/submission/551042206.json?oauth_token=${process.env.TOKEN}`
    )
    .then(api => {
      res.json(api.data);
    })
    .catch(err => {
      console.log(err);
    });
});

App.get("/api/form", (req, res) => {
  axios
    .get(
      `http://www.formstack.com/api/v2/form/3634968.json?oauth_token=${process.env.TOKEN}`
    )
    .then(api => {
      res.json(api.data);
    })
    .catch(err => {
      console.log(err);
    });
});

if (process.env.NODE_ENV === "production") {
  App.use(Express.static("client/build"));

  App.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

App.listen(PORT, () => {
  console.log(
    `Express seems to be listening on port ${PORT} so that's pretty good 👍`
  );
});
