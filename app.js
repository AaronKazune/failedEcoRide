var express = require("express");
var path = require("path");
var mysql = require('mysql');
const cors = require('cors');

//var routes = require("./routes");

var app = express();
app.use(cors());

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"ecoride",
    database:"ecoride"
    
});


app.set("port",process.env.PORT || 3000);

app.set("views",path.join(__dirname,"views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname + '/public')));

//app.set('view engine', 'html');

//app.set("Admin",path.join(__filename,"Admin"));
//app.set("view engine", "html");

app.use("/", require("./routes/web"));
app.use("/api", require("./routes/api"));



app.listen(app.get("port"),function(){
    console.log("Server started on port " + app.get("port"));
});
