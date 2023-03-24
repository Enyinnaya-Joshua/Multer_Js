const cloudinary = require("cloudinary").v2;
// Configuration
cloudinary.config({
  cloud_name: "enyinnaya",
  api_key: "312915184473612",
  api_secret: "-4UZaXx69QFko2f1kfKGBhPoCow",
  secure: true,
});

module.exports = cloudinary;
