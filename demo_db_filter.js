const mysql = require('mysql2')

const con = mysql.createConnection({
    host:"localhost",
    password:"testpass123",
    user:"bilard",
    database:"mydb"
})

con.connect((err) => {
    if(err) throw err;
    console.log("Connected")
    let filterByAdd = "SELECT * FROM customers WHERE address = 'Park Lane 38'";
    //FILTERS BY ADDRESS WHERE THE FIRST LETTER STARTS WITH S
    let filterByFirstLetter = "SELECT * FROM customers WHERE address LIKE 'S%'";
    con.query(filterByFirstLetter, function(err, result){
        if(err) throw err;
        console.log(result)
    })
})