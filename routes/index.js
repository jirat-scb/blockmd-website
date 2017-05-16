var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'HOME', cls: 'ml-home' });
});

router.get('/aboutus', function(req, res, next) {
    res.render('aboutus', { title: 'ABOUT US', cls: 'ml-about' });
});

router.get('/product', function(req, res, next) {
    res.render('product', { title: 'PRODUCT', cls: 'ml-product' });
});

router.get('/news', function(req, res, next) {
    res.render('news', { title: 'NEWS', cls: 'ml-news' });
});

router.get('/careers', function(req, res, next) {
    res.render('careers', { title: 'CAREERS', cls: 'ml-careers' });
});

router.get('/contactus', function(req, res, next) {
    res.render('contactus', { title: 'CONTACT US', cls: 'ml-contact' });
});

module.exports = router;