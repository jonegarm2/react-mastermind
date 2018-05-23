var express = require('express');
var router = express.Router();
var Score = require('../models/score')

router.get('/scores', function(req, res){
    Score.find({}).sort('numGuesses').limit(10).then(scores => res.json(scores));
});

router.post('/scores/new', function(req, res) {
    let b = req.body;
    let newScore = new Score({
        initials: b.initials,
        numGuesses: b.numGuesses,
        seconds: b.seconds})
    newScore.save(function(err, doc) {
        res.json(doc)
    })
})

module.exports = router;