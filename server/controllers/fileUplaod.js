// External Imports
const fs = require("fs");

// Internal Imports
const Image = require("../models/image");
const baseUri = process.env.BASE_URI;

const singleFileUploader = async (req, res) => {
  try {
    if (req.file) {
      return res.json({
        message: "file upload successfully",
      });
    } else {
      return res.json({
        message: "upload a valid image",
      });
    }
  } catch (error) {
    return res.json({
      error,
    });
  }
};


const multipleFileUploader = (req, res) => {
  try {
    if (req.files) {
      return res.json({
        message: "files upload successfully",
        fileDetails: req.files,
      });
    } else {
      return res.json({
        message: "upload  valid images",
      });
    }
  } catch (error) {
    return res.json({
      error,
    });
  }
};

const imageUpload = async (req, res) => {
  try {
    const image = req.body.image;
    // data:image/png;base64,iVBORw0KGgoAAAANSUhEUg......
    const data = image.split(";base64,");
    const base64Data = data[1];
    const imageExtension = data[0].split("/")[1];
    const fileName = `image${+new Date()}.${imageExtension}`;

    const pathName = `${baseUri}/${fileName}`;

    fs.writeFile(
      `${__dirname}/../images/${fileName}`,
      base64Data,
      { encoding: "base64" },
      function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log("File has been successfully saved!!!");
        }
      }
    );

    req.body.image = pathName;
    const img = new Image(req.body);
    const result = await img.save();

    if (result) {
      return res.status(201).json({
        message: "Image added successfully",
        data: result,
      });
    }
  } catch (error) {
    return res.json({
      error,
    });
  }
};

module.exports = {
  singleFileUploader,
  multipleFileUploader,
  imageUpload,
};
