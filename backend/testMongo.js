const mongoose = require('mongoose');

const DB_URL = 'mongodb+srv://LubriFiltres:wholesale@cluster0.12phg.mongodb.net/LubriFiltres';

mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
  });
