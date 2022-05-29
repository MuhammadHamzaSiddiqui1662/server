const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

//Middlewares
app.use(cors());
app.use(bodyParser.json());

//Imported ROUTES
const todoRouter = require('./Routes/todoRoutes');
app.use('/todo', todoRouter);

//ROUTES
app.get('/', (req, res) => {
  res.send('We are on home');
})

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.log('Connected to DB')
})

//Listen
const port = process.env.PORT || 5000
app.listen(port);