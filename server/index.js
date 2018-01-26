
const express = require("express");
const app = express();
let setupRoutes = require("./api/routes/routes");
let setupDatabase = require("./data/initialize");

app.set("port", process.env.PORT || 3001);

setupRoutes(app);
setupDatabase(app);

app.listen(app.get("port"), () =>
    console.log(`find the test server at: http://localhost:${app.get("port")}/`));

module.exports = app;