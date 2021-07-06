const mysql = require('mysql2')

const con = mysql.createConnection({
    host:"localhost",
    password:"testpass123",
    user:"bilard",
    database:"mydb"
})

con.connect((err)=>{
    if (err) throw err;
    console.log("connected")
    let selectAll = "SELECT * FROM customers";
    let selectColumns = "SELECT name, address FROM customers";
    con.query(selectColumns, function(err, result){
        if(err) throw err;
        console.log(result[2])
        console.log(result[2].address)
    })
})