var express = require('express');
var router = require('express').Router();

router.use(express.static(__dirname+'/../assets'));
router.use('/templates', express.static(__dirname + '/../templates'))

router.get('/', function(req, res){
	res.sendfile('layouts/app.html');
});

module.exports = router;

