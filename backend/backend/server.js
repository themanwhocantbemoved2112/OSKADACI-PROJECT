const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Server jalan! 🚀' });
});

app.get('/api/portfolio', (req, res) => {
  res.json([
    { id: 1, title: 'Project 1', description: 'Website Awesome' },
    { id: 2, title: 'Project 2', description: 'Mobile App' },
    { id: 3, title: 'Project 3', description: 'E-commerce Platform' }
  ]);
});

app.get('/api/products', (req, res) => {
  res.json([
    { id: 1, name: 'Produk 1', price: 50000 },
    { id: 2, name: 'Produk 2', price: 75000 },
    { id: 3, name: 'Produk 3', price: 100000 }
  ]);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
