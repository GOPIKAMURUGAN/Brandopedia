const express = require('express');
const cors = require('cors');

const cartRoutes = require('./routes/cartRoutes');


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/cart', cartRoutes);


app.get('/', (req, res) => {
  res.send('API running with JSON file 📄');
});

app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
