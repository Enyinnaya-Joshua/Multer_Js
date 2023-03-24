const express = require("express");
const profileModel = require("../model/user.model");
const upload_image = require("../db/cloudinary");

const getUser = async (req, res) => {
  try {
    const user = await profileModel.find();
    return res.status(200).json({
      message: "success finding user",
      data: user,
    });
  } catch (error) {
    return res.status(400).json({
      message: "an error occured",
      data: error,
    });
  }
};

const createUser = async (req, res) => {
  try {
    const result = await upload_image.uploader.upload(req.file.path, {
      width: 500,
      height: 500,
      Crop: "fill",
    });

    console.log(res);
    const { name, bio } = req.body;

    // console.log(req.file);

    const user = await profileModel.create({
      name,
      bio: bio ? bio : "default bio",
      image: req.file ? result.secure_url : "upload/card-id-image-blur.png",
    });

    return res.status(201).json({
      message: "successfull creating user",
      data: user,
    });
  } catch (error) {
    return res.status(400).json({
      message: "an error occured creating user",
      data: error,
    });
  }
};

module.exports = { getUser, createUser };
