if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const fs = require("fs");
const path = require("path");
const compression = require("compression");
const bodyParser = require("body-parser");
const logger = require("morgan");
const session = require("express-session");
const methodOverride = require("method-override");
const passport = require("passport");
const db = require("./models");
const app = express();

app.set("port", process.env.PORT || 3001);

const routes = require("./routes/index");

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.use(compression());
  app.use(logger("dev"));
  app.use((err, req, res, next) => {
    res.status(err.status || 500)
        .json({
          status: "error",
          message: err.message
        });
  });
} else {
  app.use(logger("dev"));
  app.use((err, req, res, next) => {
    res.status(err.status || 500)
        .json({
          status: "error",
          message: err
        });
  });
}

app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride());


app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

app.use("/api", routes);

if (process.env.NODE_ENV === "development" || process.env.NODE_ENV === "test") {
  db.sequelize.sync().then(() => {
    app.listen(app.get("port"), () => {
      console.log(`find the server at: http://localhost:${app.get("port")}/`);
    })
  })
}
else {
  app.listen(app.get("port"), () => {
    console.log(`find the server at: http://localhost:${app.get("port")}/`);
  });
  db.sequelize.sync();
}

module.exports = app;
