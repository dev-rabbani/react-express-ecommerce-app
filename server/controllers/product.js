// Internal Imports
const Product = require("../models/product");

// create
const create = async (req, res) => {
  try {
    const { name } = req.body;
    const filterProduct = await Product.findOne({ name });
    if (filterProduct) {
      return res.json({
        msg: "Product already exist with this name",
      });
    } else {
      const productData = req.body;
      const newProduct = new Product(productData);
      const data = await newProduct.save();
      return res.json({
        msg: "Product created suceessfully",
        data,
      });
    }
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

    if (!data) {
      return res.json({
        message: "No updated Data Found",
      });
    }
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
    const data = await Product.find();
    if (!data) {
      return res.json({
        msg: "Product not found",
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
