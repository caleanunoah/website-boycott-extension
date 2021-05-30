/*
#NOTE To connect to db make sure you have node (runs javascript on backend) and npm (package manager) 
installed on your computer

Steps to Run
  1. Below, change the connection parameters "pass" and "db_name" to what you set in MySQL
  2. Open up this project's directory in cmd
  3. run the command "npm install mysql"
  4. run the command "node app.js"
*/

const mysql = require("mysql"); // import statement (make sure you do step 3. above)

const db_name = 'boycott'     // Change to whatever youve named your db in MySQL
const pass = 'password here'

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',             // if you changed the user name in MySQL, change this too but you prob left it as default 
    password: pass,
    database: db_name
});

// Print if connection succeeded or failed
connection.connect((err) => {
    if(err){
        console.log('Error connecting to Db');
        return;
      }
      console.log('Connection established');
});

// Query to get data. I have a table called "urls" which I popualted with test data.
connection.query('SELECT * FROM urls', (err,rows) => {
    if(err) throw err;
  
    // You will see this in the command line window (NOT a browser)
    console.log('Data received from Db:');
    console.log(rows);
  });


// Terminate the connection after query
connection.end((err) => {

});