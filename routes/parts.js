const router = require('express').Router();
const Part = require('../models/Part');

router.get('/', async (req, res) => {
  const parts = await Part.getAllParts();
  res.render('parts', { title: 'Posts', parts, isPosts: true });
});

router.get('/:id', async (req, res) => {
    const part = await Part.getPartById(req.params.id);  
    res.render('part', { title: 'Parts', part });
  });

module.exports = router;