var express = require('express');
var router = express.Router();

/* GET home page. */
router.get(':bucketId', function(req, res, next) {
  res.render('index', { title: 'Express', bucket: req.params.bucketId });
});

module.exports = router;
