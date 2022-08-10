const express = require('express');
const tAccount = require('../Modules/tAccount');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const tAccounts = await tAccount.find();
    res.json({
      status: 'success',
      data: tAccounts
    })
  } catch (err) {
    console.log(err)
    res.json({
      status: 'failed',
      message: err
    })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const data = await tAccount.find({ _id: req.params.id });
    res.json({
      status: 'success',
      data: data
    })
  } catch (err) {
    console.log(err);
    res.json({
      status: 'failed',
      message: err
    })
  }
})

router.post('/', async (req, res) => {
  try {
    const tAcc = new tAccount({
      title: req.body.tAcc.title,
      debit: req.body.tAcc.debit,
      credit: req.body.tAcc.credit,
      date: req.body.tAcc.date,
      category: req.body.tAcc.category
    })
    const data = await tAcc.save()
    res.json({
      status: 'success',
      data: data
    })
  } catch (err) {
    console.log(err);
    res.json({
      status: 'failed',
      message: err
    })
  }
})

router.patch('/', async (req, res) => {
  try {
    const oldTAcc = await tAccount.find({ title: req.body.tAcc.title });
    const report = await tAccount.updateOne({ _id: oldTAcc[0]._id }, {
      $set: {
        debit: [...oldTAcc[0].debit, req.body.tAcc.debit],
        credit: [...oldTAcc[0].credit, req.body.tAcc.credit],
        date: [...oldTAcc[0].date, req.body.tAcc.date]
      }
    });
    // const updatedTAccounts = await tAccount.find()
    res.json({
      status: 'success',
      data: report
    })
  } catch (err) {
    console.log(err);
    res.json({
      status: 'failed',
      message: err
    })
  }
})

module.exports = router;