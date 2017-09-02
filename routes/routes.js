// const express = require("express")
// const MONGO_URL = "mongodb://127.0.0.1:27017/robots"
// // const MongoClient = require("mongodb")
// const mustache = require ("mustache-express")
// const router = express.Router()
// const users = require ("../Model/robot")
// const mongoose = require("mongoose")
// mongoose.Promise = require("bluebird")
//
//

// MongoClient.connect(MONGO_URL, function(err, db) {
//   if (err) {
//     throw err;
//   } else {
//     console.log('Successfully connected to the database');
//   }
//   const data = require("./data");
//   for (var i = 0; i < data.users.length; i++) {
//     const user = data.users[i];
//     db.collection("users").updateOne(
//       {id: user.id},
//       user,
//       {upsert: true}
//     )
//   }
// })
//////----------------------////////

// router.get("/", function(req, res) {
//   mongoose.connect(MONGO_URL, function(err, db) {
//     console.log("Check robot")
//     users.find()
//     .then(function(users) {
//       res.render("index", {
//         users: users
//       })
//     })
//   })
// })
//
// router.get("/", function(req, res) {
//   mongoose.connect(MONGO_URL, function(err, db) {
//       console.log("Check robot")
//     db.collection("users").find().toArray().then(function(users) {
//       res.render("index", {
//         users: users
//       })
//     })
//   })
// })

// router.get("/users/:id", function(req, res) {
//     router.get("/", function(req, res) {
//       mongoose.connect(MONGO_URL, function(err, db) {
//           console.log("Check robot")
//           users.find().toArray().then(function(users) {
//           res.render("index", {
//             users: users
//           })
//         })
//       })
//     })

/////
// router.get("/users/:id", function(req, res) {
//     router.get("/", function(req, res) {
//       mongoose.connect(MONGO_URL, function(err, db) {
//           console.log("Check robot")
//         db.collection("users").find().toArray().then(function(users) {
//           res.render("index", {
//             users: users
//           })
//         })
//       })
//     })
//


// .connect(MONGO_URL, function(err, db) {
//     db
//       .collection("users")
//       .findOne({id: parseInt((req.params.id))})
//       .then(function(user) {
//         res.render("users", {
//           user: user
//         })
//       })
//   })
// })
//
// router.get("/register", function(req, res){
//   res.render("register")
//   })
//
// router.get("/edit",function (req, res){
//     res.render("edit")
// })
//
// router.post("/newuser", function(req, res){
//     res.redirect("/")
//     })
//
// module.exports = router
