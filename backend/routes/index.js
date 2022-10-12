var express = require('express');
var router = express.Router();
const mainPageController = require('../controllers/index');
/* GET home page. */
router.get('/', mainPageController.getMainPage);

module.exports = router;
