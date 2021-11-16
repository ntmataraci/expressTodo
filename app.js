const path = require("path");
const fs = require("fs");
const express = require("express");
const exp = require("constants");
const app = express();

app.use(express.static(__dirname))

const myList =JSON.parse(fs.readFileSync("./data.json"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/sender.html"));
});

app.use(express.urlencoded({ extended: true }));

app.post("/sender", (req, res) => {
  const newData = {
    goal: req.body.goal,
    date: req.body.date,
    finished: req.body.finished
  };
  myList.push(newData);
  fs.writeFileSync("./data.json",JSON.stringify(myList))

  res.redirect("/")
});

app.use("/api",(req,res)=>{
    res.sendFile(path.join(__dirname+"/data.json"))
})


app.listen(8000, (req, res) => {
  console.log("bağlandı");
});
