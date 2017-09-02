// require mongo & mongoose patterns

const express = require("express")
const MongoClient = require("mongodb")
const app = express()
const mustache = require("mustache-express")
const bodyParser = require("body-parser")
const path = ("path")
const users = ("./models/Robot")
const session = require("express-session")
const newRobot = require("./models/Robot")
const mongoose = require("mongoose")
mongoose.Promise = require("bluebird")
const MONGO_URL = "mongodb://127.0.0.1:27017/robots"


app.engine('mustache', mustache())
app.set('view engine', 'mustache')
app.use( express.static('public'))

var sess = {
  secret: "classfied",
  cookie: {},
  saveUninitialized: true,
  resave: true
}

app.use(session(sess))
app.use(bodyParser.urlencoded({
  extended: false
}))



///// newline course code import data to mongo /////
MongoClient.connect(MONGO_URL, function(err, db) {
  if (err) {
    throw err;
  } else {
    console.log('Successfully connected to the database');
  }
  const data = require("./data");
  for (var i = 0; i < data.users.length; i++) {
    const user = data.users[i];
    db.collection("users").updateOne(
      {id: user.id},
      user,
      {upsert: true}
    )
  }
})


//////----------------------////////
app.get("/", function(req, res) {
  MongoClient.connect(MONGO_URL, function(err, db) {
      console.log("Check 123 robot is listening")
    db.collection("users").find().toArray().then(function(users) {
      res.render("index", {
        users: users
      })
    })
  })
})

/// each page of robot by their id
app.get("/users/:id", function(req, res) {
  MongoClient.connect(MONGO_URL, function(err, db) {
    db
      .collection("users")
      .findOne({id: parseInt((req.params.id))})
      .then(function(user) {
        res.render("users", {
          user: user
        })
      })
  })
})

// register to login for edit
app.get("/register", function(req, res){
  res.render("register")
})


// adding new robot by model we set up
app.post("/newRobot", function (req, res){
  const username = req.body.username
  const passowrd = req.body.artist
  const name = req.body.name
  const skills = req.body.skills
  const university = req.body.university
  const email = req.body.email
  const job = req.body.job
  const company = req.body.company
  const phonenumber = req.body.phonenumber
  const user = new User()
  // console.log(new User)

  users.username = username
  users.passowrd = passowrd
  users.name = name
  users.skills = skills
  users.university = university
  users.email = email
  users.job = job
  users.company = company
  users.phonenumber = phonenumber

  console.log(users);
  user
    .save()
    .then(function(users) {
      res.redirect("/")
    })
    .catch(function(error) {
      console.log("error", error)
      res.render("new", {
        album: album,
        errors: error.errors
      })
    })
})



app.get("/edit", function(req, res){
  res.render("edit")
})

app.get("/delete", function(req, res){
  res.render("delete")
})

app.listen(3000, function(){
console.log("Robots are rule the world")
})
