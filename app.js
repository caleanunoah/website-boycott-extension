/*
#NOTE To connect to db make sure you have node (runs javascript on backend) and npm (package manager) 
installed on your computer

Steps to Connect to DB
  1. Below, change the connection parameters "user", "database" to what you set in MySQL
  2. Open up cmd.exe in project & run the command "npm install" to install project dependencies
  5. Create a file called ".env" in the project root folder
  4. In your .env, put the line: PASS=Your-Pass-Word-Here
  6. run the command "node app.js" and in the console you should see the data from the query
*/

const mysql = require("mysql"); // import statement (make sure you do step 3. above)
const async = require('async');
require('dotenv').config();     // for password

var myrows = []

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',               // if you changed the user name in MySQL, change this too but you prob left it as default 
    password: process.env.PASS, // variable from .env file
    database: 'boycott'         // change to your db's name in MySQL
});

/*
// Print if connection succeeded or failed
connection.connect((err) => {
    if(err){
        console.log('Error connecting to Db');
        return;
      }
      console.log('Connection established');
});

// Query to get data. I have a table called "urls" which I popualted with test data.

connection.query('SELECT * FROM urls', (err, rows, fields) => {
    if(err) throw err;
  
    
    // You will see this in the command line window (NOT a browser)
    console.log('Data received from Db: ', rows);
    
  });

// Terminate the connection after query
connection.end((err) => {
});
*/


// ---------------------------------------------------------------------------------------------

async.waterfall([
  function(callback) {
    connection.connect(function(err){
      if (err) {
        throw err;
        return;
        }
      
      console.log("Async Connection");
      connection.query('SELECT * FROM urls', function(err, result) {
        if (err) throw err;
  
        result.forEach(function(item) {
          myrows.push(item)
        });
        callback(null, myrows);
        connection.end((err) => { });
      });
    });
    
  }
  
],
function(err, myrows){
  console.log("my rows: ", myrows)
  return myrows
});


