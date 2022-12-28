const express = require('express');
const router = express.Router();
const { allCats, singleCat } = require('../../data');

router.get('/', async (req, res) => {
  res.locals = {
    cats: await req.storage.allCats(),
  };
  res.render('index', { layout: false });
});

module.exports = router;
