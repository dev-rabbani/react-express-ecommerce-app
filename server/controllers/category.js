// Internal Imports
const Category = require("../models/category");

// create
const create = async (req, res) => {
  try {
    const { name } = req.body;
    const filterCategory = await Category.findOne({ name });
    if (filterCategory) {
      return res.json({
        msg: "Category already exist with this name",
      });
    } else {
      const categoryData = req.body;
      const newCategory = new Category(categoryData);
      const category = await newCategory.save();
      return res.json({
        msg: "Category created suceessfully",
        category,
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
    const { catId } = req.params;

    await Category.findOneAndUpdate(
      { _id: catId },
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
      message: "Category info updated successfully",
      data,
    });
  } catch (error) {
    error;
  }
};

// remove
const remove = async (req, res) => {
  try {
    const { catId } = req.params;
    const isValid = await Category.findOne({ _id: catId });
    if (!isValid) {
      return res.json({
        msg: "Category Not found",
      });
    }
    if (catId && isValid) {
      const deleteData = await Category.findOneAndDelete({
        _id: catId,
      });
      res.json({
        msg: "Category deleted successfully",
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
    const data = await Category.find();
    if (!data) {
      return res.json({
        msg: "Category not found",
      });
    }
    return res.json({
      msg: "Category List",
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
    const data = await Category.findOne({ _id: id });
    if (!data) {
      return res.json({
        msg: "Category not found",
      });
    }
    return res.json({
      msg: "Category Data",
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
