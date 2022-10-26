var express = require('express');
var router = express.Router();
let bcrypt = require('bcrypt');
let uid2 = require('uid2');
const usersModel = require("../models/users");


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
