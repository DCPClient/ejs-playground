var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function (_, res) {
  res.render("pages/index", {
    /* YOUR MAIN DATA */
  });
});

app.listen(3000, () => {
  console.log("Open http://localhost:3000");
});
