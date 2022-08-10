const express = require('express');
const User = require('../Modules/users');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    if (!req.query.email) {
      const users = await User.find()
      res.json(users)
    }
    else if (req.query.email && !req.query.password) {
      const users = await User.find({ email: req.query.email })
      res.json(users)
    }
    else {
      const user = await User.find({
        email: req.query.email,
        password: req.query.password
      })
      res.json(user)
    }
  } catch (err) {
    res.json({ message: err })
  }
})

router.post('/', async (req, res) => {
  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password
  })

  try {
    const data = await user.save()
    res.json(data)
  } catch (err) {
    res.json({ message: err })
  }
})

module.exports = router;