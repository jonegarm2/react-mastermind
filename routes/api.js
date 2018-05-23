var express = require('express');
var router = express.Router();
var Score = require('../models/score')

router.get('/scores', function(req, res){
    Score.find({}).then(scores => res.json(scores));
});

module.exports = router;