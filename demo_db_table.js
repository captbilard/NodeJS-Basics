const mysql = require('mysql2')

const con = mysql.createConnection({
    host:"localhost",
    user:"bilard",
    password:"testpass123",
    database:"mydb",
})

con.connect((err) =>{
    if (err) throw err;
    console.log("Connected")
    // Creates the table called customers with column name and address
    // con.query('CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))', (err, result) =>{
    //     if (err) throw err;
    //     console.log("Table Created")
    // })
    
    //Creates table called customers with same details as above and an ID
    con.query('ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY', (err, result) => {
        if (err) throw err;
        console.log("Table altered")
    })
})