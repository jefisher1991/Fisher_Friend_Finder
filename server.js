// server.js file
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path"); 


var app = express();
var PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

var buddies = [
	{
  "name":"John",
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores":[1,2,3,4,5,6,7,8,9,1]
	},
	{
  "name":"Adam",
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores":[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
	},
	{
  "name":"Michael",
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores":[5, 1, 4, 6, 8, 1, 3, 5, 4, 1]
	},
	{
  "name":"Christine",
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores":[3, 1, 8, 4, 5, 1, 2, 4, 4, 3]
	},
	{
  "name":"Harambe",
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores":[5, 1, 3, 4, 5, 1, 3, 5, 4, 3]
	},
	{
  "name":"Wilson",
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores":[5, 1, 3, 4, 3, 3, 2, 3, 4, 1]
	},
	{
  "name":"Obama",
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores":[5, 1, 4, 3, 5, 1, 2, 5, 4, 3]
	},
	{
  "name":"Trump",
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores":[5, 1, 4, 3, 5, 1, 2, 5, 3, 1]
	},
	{
  "name":"Kim Jung Un",
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores":[5, 1, 4, 3, 5, 1, 2, 5, 3, 1]
	},
	{
  "name":"Alex",
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores":[3, 1, 4, 4, 3, 3, 3, 3, 4, 1]
	}
]; 




app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

// html routes file
app.get ("/survey", function (req, res){
	res.sendFile(path.join(__dirname, "app/public/survey.html")); 
})


// api routes
app.get("/api/friends", function (req, res){
	res.json(buddies); 
})

app.post("/api/friends", function (req, res){
	// alog. to check response data with buddies data
	res.send("Your best friend is:")
})






