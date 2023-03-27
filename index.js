const express = require("express");
const path = require("path");
const app = express();
const port = 8000;
let ejs = require("ejs");

const bodyParser = require("body-parser");
// database content
const db = require("./config/mongoose");
const items = require("./models/items");
const { Collection } = require("mongoose");

// routes content

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded());
app.use(express.static("assets"));

// fetching data from database
app.post("/create_items", function (req, res) {
  const newUser = new items({
    description: req.body.desc,
    category: req.body.categories,
    date: req.body.date,
  });
  newUser
    .save()
    .then(() => {
      return res.redirect("back");
    })
    .catch((err) => {
      console.log(err);
    });
});
// putting data on the screen
app.get("/", function (req, res) {
    var t=items.find({}, function (err, items) {
    if (err) {
      console.log("error happening");
      return;
    }
    return res.render("home", {
      title: "todo_app",
      dues: items,
    });
  });
});

// to delete data
// app.get("/delete-item", function (req, res) {
//     let id=req.query.id;
//     Contact.findByIdAndDelete(id,function(err){
//         if(err){
//           console.log("error in deleting element");
//           return;
//         }
//         return res.redirect("back");
//     });
    
//   });

app.listen(port, function (err) {
  if (err) {
    console.log(`Error in runnning server : ${err}`);
  }
  console.log(`Server is running on port numer : ${port}`);
});
