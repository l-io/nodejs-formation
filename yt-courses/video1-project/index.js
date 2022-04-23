const express = require('express');
const mysql = require("mysql");
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 8080;

var db = mysql.createConnection({
    host: "us-cdbr-east-05.cleardb.net",
    user: "b33dfde4b3d28d",
    password: "26da6730",
    database: "heroku_67ad5680bb125d7"
});

db.connect(function(err) {
  if (err) throw err;
  else  console.log("DB Connected!");
});

app
  .use(morgan('dev'))
  .use(express.static('public'))
  
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())

  .post('/api/user', (req, res) => {
    var sql = `INSERT INTO user (
        firstName, 
        lastName, 
        age, 
        dateAdded
      ) VALUES (
        "${req.body.first}",
        "${req.body.last}",
        "${req.body.age}",
        NOW()
      )`;

    db.query(sql, function(err, result) {
      if (err) throw err;
      else console.log("Added in table user");
    });
    res.end(`Added user!`);
  })

  .listen(port, () => console.log("Port Connected"));