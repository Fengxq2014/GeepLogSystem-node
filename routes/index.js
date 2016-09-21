var express = require('express');
var router = express.Router();
var zft = require('../controllers/index');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
router.get('/',zft.index)
router.get('/zft',zft.list)
module.exports = router;
