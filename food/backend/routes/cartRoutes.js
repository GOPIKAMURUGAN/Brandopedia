const express = require('express');
const router = express.Router();
const CartItem = require('../models/CartItem');

// GET all items
router.get('/', async (req, res) => {
  const items = await CartItem.find();
  res.json(items);
});

// POST a new item
router.post('/', async (req, res) => {
  const newItem = new CartItem(req.body);
  const saved = await newItem.save();
  res.json(saved);
});

// DELETE an item by ID
router.delete('/:id', async (req, res) => {
  await CartItem.findByIdAndDelete(req.params.id);
  res.json({ message: 'Item removed' });
});

module.exports = router;
