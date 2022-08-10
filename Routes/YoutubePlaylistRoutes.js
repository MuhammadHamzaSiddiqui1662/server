const express = require('express');
const User = require('../Modules/YoutubePlaylist');

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

// router.post('/users', async (req, res) => {
//   const user = new User({
//     firstName: req.body.firstName,
//     lastName: req.body.lastName,
//     email: req.body.email,
//     password: req.body.password
//   })

//   try {
//     const data = await user.save()
//     res.json(data)
//   } catch (err) {
//     res.json({ message: err })
//   }
// })

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