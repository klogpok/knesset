const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'Regulations', isHome: true });
});

module.exports = router;
