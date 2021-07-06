const mysql = require('mysql2')

const con = mysql.createConnection({
    host:"localhost",
    user: "bilard",
    password:"testpass123"
})

con.connect((err)=>{
    if(err) throw err;
    console.log("Connected")
    //create a database
    con.query('CREATE DATABASE mydb', (err, result)=>{
        if(err) throw err
        console.log(`Database created`)
    })
})