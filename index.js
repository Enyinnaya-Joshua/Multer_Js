const express = require("express");
require("./db/db");
const router = require("./routes/user.routes");

const port = process.env.PORT || 2000;

const app = express();

app.use(express.json());
app.get("/", (req, res) => {
  res.status(200).json({
    message: "server is and running",
  });
});
app.use("/", router);

app.listen(port, () => {
  console.log("server is up and running");
});
