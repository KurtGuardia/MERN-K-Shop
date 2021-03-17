import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';

// Decription   Fetch all products
// Route        GET /api/products
// Accesss      Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// Decription   Fetch single products
// Route        GET /api/products/:id
// Accesss      Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    console.log('YESS'.rainbow);
    res.json(product);
  } else {
    console.log('NOO'.rainbow);
    res.status(404);
    throw new Error('Product not found');
  }
});

export { getProducts, getProductById };
