var express = require('express');  
var app = express();  
var bodyParser = require('body-parser');  
var express    = require('express')
var bodyParser = require('body-parser')
var app = express()
var cors = require('cors');
var CircularJSON = require('circular-json')
var mysql = require('mysql');
// use it before all route definitions
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

// parse application/vnd.api+json as json

// Create application/x-www-form-urlencoded parser  
// app.UseCors("AllowAllOrigins");
app.use(express.static('public'));  
app.get('/index.html', function (req, res) {  
   res.sendFile( __dirname + "/" + "index.html" );  
})  
app.post('/store_note_data', function (req, res) {  
   // Prepare output in JSON format  
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8001');

// use it before all route definition');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Harshit\"123",
  database: "dev"
});
console.log(  );
con.connect(function(err) {
  if (err) throw err;
  con.query("INSERT INTO keepithere(content) VALUES(\'"+req.body.key+"\')", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
   console.log(req.body.key);
   res.send(CircularJSON.stringify(req));  
}) 
app.post('/delete_note', function (req, res) {  
   // Prepare output in JSON format  
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8001');

// use it before all route definition');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Harshit\"123",
  database: "dev"
});
console.log( "in delete_note" );
con.connect(function(err) {
  if (err) throw err;
  con.query("DELETE FROM keepithere WHERE id=\'"+req.body.key+"\'", function (err, result, fields) {
    if (err) throw err;
    console.log(JSON.stringify(result));
    res.send(JSON.stringify(result));
  });
});})
   // console.log(req.body.key);
app.get('/get_all_data', function (req, res) {  
   // Prepare output in JSON format  
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8001');

// use it before all route definition');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Harshit\"123",
  database: "dev"
});
console.log( "in get_all_data" );
con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM keepithere", function (err, result, fields) {
    if (err) throw err;
    console.log(JSON.stringify(result));
    res.send(JSON.stringify(result));
  });
});
   // console.log(req.body.key);
})
var server = app.listen(8000, function () {  
  var host = server.address().address  
  var port = server.address().port  
  console.log("Example app listening at http://%s:%s", host, port)  
}) 
