var express = require('express');
var router = express.Router();
var controller = require('../controllers/controller.js')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/barcelona', controller.barcelona)

router.get('/voos', controller.voos)

module.exports = router;
