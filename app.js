const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();
// Import routes
const postsRoute = require('./routes/posts');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/posts', postsRoute);

app.get('/', (req, res) => {
  res.send('We are on home page');
});




// Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { 
    useNewUrlParser: true,
    useUnifiedTopology: true 
  },
  () => console.log('Connected to DB')
);

// mongoose.connect()

app.listen(3000);