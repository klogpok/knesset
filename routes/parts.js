const router = require('express').Router();
const Part = require('../models/Part');
const Chapter = require('../models/Chapter');

router.get('/', async (req, res) => {
    const parts = await Part.getAllParts();
    //res.send(parts);
    res.render('parts', { title: 'Parts', parts, isPosts: true });
});

router.get('/:id', async (req, res) => {
    const partId = req.params.id;
    const part = await Part.getPartById(partId);
    console.log(part);
    res.render('part', { title: 'Part', part });
});

router.get('/:id/chapters/:cId', async (req, res) => {
    const chapter = await Chapter.getChapter(req.params.id, req.params.cId);
    // res.send(chapter);
    console.log(chapter);
    res.render('chapter', {title: 'Chapter', chapter});
});

module.exports = router;