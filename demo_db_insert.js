const mysql = require('mysql2')

const con = mysql.createConnection({
    host:"localhost",
    password:"testpass123",
    user:"bilard",
    database:"mydb"
})

// Insert one record
// con.connect((err)=>{
//     if(err) throw err;
//     console.log("Connected")
//     let sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
//     con.query(sql, function(err, result){
//         if(err) throw err;
//         console.log("1 record inserted")
//     })
// })

//Insert multiple records
con.connect(function(err){
    if(err) throw err;
    console.log("Connected")
    let sql = "INSERT INTO customers (name, address) VALUES ?";
    let values = [
        ['John', 'Highway 71'],
        ['Peter', 'Lowstreet 4'],
        ['Amy', 'Apple st 652'],
        ['Hannah', 'Mountain 21'],
        ['Michael', 'Valley 345'],
        ['Sandy', 'Ocean blvd 2'],
        ['Betty', 'Green Grass 1'],
        ['Richard', 'Sky st 331'],
        ['Susan', 'One way 98'],
        ['Vicky', 'Yellow Garden 2'],
        ['Ben', 'Park Lane 38'],
        ['William', 'Central st 954'],
        ['Chuck', 'Main Road 989'],
        ['Viola', 'Sideway 1633']
      ];
    con.query(sql, [values], (err, result)=>{
        if(err) throw err;
        console.log(`Inserted ${result.affectedRows} records into the table`)
    })
})