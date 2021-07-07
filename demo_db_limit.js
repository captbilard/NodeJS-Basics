const mysql = require('mysql2')

const con = mysql.createConnection({
    host:"localhost",
    password:"testpass123",
    user:"bilard",
    database:"mydb"
})

con.connect(function(err) {
  if (err) throw err;
  var sql = "SELECT * FROM customers LIMIT 5";
  //to select 5 but start from 3
  let query = "SELECT * FROM customers LIMIT 5 OFFSET 2"
  con.query(query, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});