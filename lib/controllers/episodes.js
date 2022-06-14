const { Router } = require('express');
const { Episode } = require('../models/Episode');

module.exports = Router().get('/', async (req, res) => {
  res.json(await Episode.getAll());
});
