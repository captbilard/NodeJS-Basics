const mysql  = require('mysql2')

const con  = mysql.createConnection({
    host:"localhost",
    user:"bilard",
    password:"testpass123",
    database:"mydb"
})

con.connect((err)=> {
    if(err) throw err;
    console.log("Connected")
    con.query("delete from customers where address = 'Valley 345'", function(err, result){
        if(err) throw err;
        console.log(result.affectedRows)
    })
})