// const express = require('express');
// const sqlite3 = require('sqlite3').verbose();

// const db = new sqlite3.Database('./../db/index.db', sqlite3.OPEN_READWRITE, err => {
//   if (err) return console.error(err.message)

//   console.log("DB connected successfully")
// })

// const router = express.Router();


// module.exports = router
const express = require('express');
const GeneralEntry = require('../Modules/GeneralEntry');

const router = express.Router();

// router.get('/', async (req, res) => {
//   try {
//     if (!req.query.email) {
//       const users = await User.find()
//       res.json(users)
//     }
//     else if (req.query.email && !req.query.password) {
//       const users = await User.find({ email: req.query.email })
//       res.json(users)
//     }
//     else {
//       const user = await User.find({
//         email: req.query.email,
//         password: req.query.password
//       })
//       console.log(user);
//       res.json(user)
//     }
//   } catch (err) {
//     console.log(error);
//     res.json({ message: err })
//   }
// })

router.get('/', async (req, res) => {
  try {
    const generalEntries = await GeneralEntry.find();
    console.log(generalEntries);
    res.json({
      status: 'success',
      data: generalEntries
    })
  } catch (err) {
    console.log(err)
    res.json({
      status: 'failed',
      message: err
    })
  }
})

router.post('/', async (req, res) => {
  try {
    const generalEntry = new GeneralEntry({
      date: req.body.entry.date,
      accounts: req.body.entry.accounts
    })
    const data = await generalEntry.save()
    res.json({
      status: 'success',
      data: data
    })
  } catch (err) {
    res.json({
      status: 'failed',
      message: err
    })
  }
})

// router.patch('/users/:userId', async (req, res) => {
//   try {
//     await User.updateOne({ _id: req.params.userId }, { $set: { playlist: req.body.playlist } });
//     const updatedUser = await User.find({ _id: req.params.userId })
//     res.json(updatedUser)
//   } catch (error) {
//     res.json({ message: error })
//   }
// })

module.exports = router;