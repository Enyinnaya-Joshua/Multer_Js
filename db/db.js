const mongoose = require("mongoose");

const db = "mongodb://localhost/profile";

mongoose.connect(db);

mongoose.connection
  .on("open", () => {
    console.log("database connected");
  })
  .once("error", (error) => {
    console.log("db error", error);
  });
