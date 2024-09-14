const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(cors());          // Allow cross-origin requests

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/shebeauty', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define a schema and model for cart items
const cartItemSchema = new mongoose.Schema({
  id: String,
  name: String,
  price: String,
  imageUrl: String
});

const CartItem = mongoose.model('CartItem', cartItemSchema);

// POST route to handle adding a product to the cart
app.post('/add-to-cart', (req, res) => {
  const productData = req.body;

  // Save the product to the cart collection in MongoDB
  const cartItem = new CartItem(productData);
  cartItem.save()
    .then(() => {
      res.json({ message: 'Product added to cart successfully' });
    })
    .catch(err => {
      console.error('Error saving product to cart:', err);
      res.status(500).json({ error: 'Failed to add product to cart' });
    });
});

// Route to fetch cart items
app.get('/cart', (req, res) => {
  console.log('Fetching cart items...');
  CartItem.find()
    .then(items => {
      res.json(items);
    })
    .catch(err => {
      console.error('Error fetching cart items:', err);
      res.status(500).json({ error: 'Failed to fetch cart items' });
    });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
