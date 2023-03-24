const mongoose = require("mongoose");

const profileSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timeStamps: true,
  }
);

const profileModel = mongoose.model("profs", profileSchema);
module.exports = profileModel;
