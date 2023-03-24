const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "upload");
  },

  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  console.log(file);
  if (file.mimetype !== "image/jpeg") {
    cb(null, new Error("Unsupperted Format"), false);
  }
  console.log(typeof file.mimetype);
  console.log(file);
  cb(null, true);
};

console.log("first", fileFilter);

const imageUploader = multer({
  storage: storage,
  fileFilter: fileFilter,
}).single("image");

module.exports = imageUploader;
