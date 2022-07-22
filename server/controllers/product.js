// Internal Imports
const Product = require("../models/product");
const Image = require("../models/image");
const baseUri = process.env.BASE_URI;

// create
const create = async (req, res) => {
  try {

    if (!req.file || !req.body) {
      return res.json({
        msg: "No Data Found"
      })
    }

    const product = await new Product(req.body);
    product.image = `${baseUri}/images/${req?.file?.filename}`
    const data = await product.save()

    return res.json({
      msg: 'Product Created Successfully',
      data
    })


  } catch (error) {
    return res.json({
      error,
    });
  }
};

// update
const update = async (req, res) => {
  try {
    const { proId } = req.params;

    if (!req.file || !req.body) {
      return res.json({
        msg: "No updated Data Found"
      })
    }

    await Product.findOneAndUpdate(
      { _id: proId },
      {
        $set: req.body,
      },
      {
        multi: true,
      }
    );

    const data = req.body;
    // data.image = `${baseUri}/images/${req?.file?.filename}`

    return res.json({
      message: "Product info updated successfully",
      data,
    });
  } catch (error) {
    error;
  }
};

// remove
const remove = async (req, res) => {
  try {
    const { proId } = req.params;
    const isValid = await Product.findOne({ _id: proId });
    if (!isValid) {
      return res.json({
        msg: "Product Not found",
      });
    }
    if (proId && isValid) {
      const deleteData = await Product.findOneAndDelete({
        _id: proId,
      });
      res.json({
        msg: "Product deleted successfully",
      });
    } else {
      return res.json({
        msg: "please provide valid data",
      });
    }
  } catch (error) {
    res.json({
      error,
    });
  }
};

// list
const list = async (req, res) => {
  try {
    const data = await Product.find().populate('category');
    if (!data) {
      return res.json({
        msg: "Product List",
        data,
      });
    }
    return res.json({
      msg: "Product List",
      data,
    });
  } catch (error) {
    return res.json({
      error,
    });
  }
};

// getById
const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Product.findOne({ _id: id });
    if (!data) {
      return res.json({
        msg: "Product not found",
      });
    }
    return res.json({
      msg: "Product Data",
      data,
    });
  } catch (error) {
    return res.json({
      error,
    });
  }
};

module.exports = {
  create,
  list,
  update,
  remove,
  getById,
};
