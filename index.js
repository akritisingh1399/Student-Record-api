const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// MongoDB Atlas connection
mongoose.connect('mongodb://127.0.0.1:27017/studentDB')
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));


const studentRoutes = require('./routes/studentRoutes');
app.use('/students', studentRoutes);

app.get('/', (req, res) => res.send("Student API is running"));

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));





