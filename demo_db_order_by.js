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
    con.query('SELECT * FROM customers ORDER BY name DESC', function(err, result){
        if(err) throw err;
        console.log(result)
    })
})