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
const userRouter = require('./Routes/userRoutes');
app.use('/users', userRouter);

const YoutubePlaylistRouter = require('./Routes/YoutubePlaylistRoutes');
app.use('/YoutubePlaylist', YoutubePlaylistRouter);

const GeneralJournalRoutes = require('.//Routes/GeneralJournalRoutes');
app.use('/GeneralJournal', GeneralJournalRoutes);

const LedgerRoutes = require('.//Routes/LedgerRoutes');
app.use('/Ledger', LedgerRoutes);

//ROUTES
app.get('/', (req, res) => {
  res.send('We are on home of personal server');
})

//Connect to DB
mongoose.connect(process.env.MONGODB_URI || process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.log('Connected to DB')
})

//Listen
const port = process.env.PORT || 5000
app.listen(port, () => console.log('Server listening on Port ' + port));