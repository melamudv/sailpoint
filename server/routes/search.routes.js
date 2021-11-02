const express = require('express');
//const {Router, response} = require('express')
const City = require('../models/City')
const router = express.Router()

router.post('/', async(req, res) => {
  try{
    const {country, limit} = req.body;
    const regex = new RegExp(country, 'i')
    const cities = await City.find({ name: {$regex: regex} }).sort({ name: "asc" })
      .limit(limit);
    res.json({payload: cities})
  } catch (e) {
    res.status(500).json({message: "Error"})
  }
})

router.get('/', async (req, res) => {
  const city = await City.find();
  try {
    res.json(city);
  } catch (error) {
    res.status(500).send(error);
  }
})

module.exports = router;


