var express = require('express');
var router = express.Router();
let bcrypt = require('bcrypt');
let uid2 = require('uid2');
const usersModel = require("../models/users");


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup', async function(req, res, next){
  let error = [];
  let userSaved = null;
  let result = false;
  let hash = bcrypt.hashSync(req.body.password, 10);

  let data = await usersModel.findOne({
    email: req.body.email,
  });

  if (data != null) {
    error.push("Utilisateur déjà présent");
  }

  if (
    req.body.pseudo == "" ||
    req.body.email == "" ||
    req.body.password == ""
  ) {
    error.push("Champs vides");
  }

  if (error.length == 0) {
    let newUser = new usersModel({
      pseudo: req.body.pseudo,
      email: req.body.email,
      password: hash,
      token: uid2(32),
      date_inscription: new Date,
    });

    userSaved = await newUser.save();

    if (userSaved) {
      result = true;
    }
  }

  res.json({ userSaved, result, error });
  
})

router.post("/signin", async (req, res) => {

  let error = [];
  let user = "";
  let result = false;

  if (req.body.email == "" || req.body.password == "") {
    error.push("Champs vides");
  }

  if (error.length == 0) {
    user = await usersModel.findOne({
      email: req.body.email,
    });

    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        result = true;
      } else {
        result = false;
        error.push("Mot de passe incorrect");
      }
    } else {
      error.push("Email incorrect");
    }

  };

  res.json({ error, user, result })
})

router.get("/allUsers", async (req, res) => {
  var users = await usersModel.find();

  if(users){
    res.json({response: true, users : users})
  }
})

module.exports = router;
