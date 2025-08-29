const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const path = require('path');
require('dotenv').config();

const app = express();

// Middleware
app.use(helmet());
app.use(compression());
app.use(cors({
  origin: ['http://localhost:3000', 'http://127.0.0.1:3000'],
  credentials: true
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Database connection - Use MongoDB Atlas or local fallback
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://admin:admin123@cluster0.mongodb.net/cybx-clone?retryWrites=true&w=majority';

mongoose.connect(MONGODB_URI)
.then(() => console.log('MongoDB Connected'))
.catch(err => {
  console.log('MongoDB Connection Error:', err);
  console.log('Trying local MongoDB...');
  // Fallback to local MongoDB
  mongoose.connect('mongodb://127.0.0.1:27017/cybx-clone')
    .then(() => console.log('Local MongoDB Connected'))
    .catch(localErr => console.log('Local MongoDB also failed:', localErr));
});

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contact', require('./routes/contact'));
app.use('/api/newsletter', require('./routes/newsletter'));
app.use('/api/projects', require('./routes/projects'));
app.use('/api/services', require('./routes/services'));
app.use('/api/blog', require('./routes/blog'));

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

