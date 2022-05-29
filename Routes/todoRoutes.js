const express = require('express');
const User = require('../Modules/todo');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    if (!req.query.email) {
      const users = await User.find()
      res.json(users)
    }
    else {
      const user = await User.find({
        username: req.query.email,
        password: req.query.password
      })
      res.json(user)
    }
  } catch (err) {
    res.json({ message: err })
  }
})

router.post('/users', async (req, res) => {
  const user = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
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