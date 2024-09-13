const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./route/auth'); // Adjust path if necessary

const cors = require('cors');


const app = express();
app.use(cors());
app.use(bodyParser.json()); // Middleware to parse JSON requests

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/shebeauty', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

// Use routes
app.use('/api', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
