/*
@author Noah Caleanu

Serverside file to start a static express server, open up connection to database, and send data to client browser (through port 3000).

# Note: for instructions on how to run this file, see the README.md
*/

require('dotenv').config();         // Set up the env file to use password.

const mysql = require("mysql");     // import the driver that connects to sql db
const async = require('async');     // import driver to run async functions (can't use synchronous bc we have to WAIT for data to be returned)
const express = require("express"); // import driver for express server that will receive data from serverside and send to clientside


const app = express();              // Start the Server
const port = 3000;                  // Port that the express server should listen for data

var myrows = []                       // List of url's that will be returned from SQL db
var pass = "mySQL password"
var pass = process.env.PASS           // variable from .env file. If you do not have one, just comment out this line and use the above variable.

// First must connect to SQL database. Ensure your mySQL server is running (see github readme)
const connection = mysql.createConnection({
    host: 'localhost',                // Dont change
    user: 'root',                     // Dont change
    password: pass,                   // Either variable from .env file or local string 
    database: 'boycott'               // Change to your db's name in MySQL
});


// Express Server is ready to get data and send to front end now.
app.get('/', (req, res) => {

  // Waterfall will run 2 async functions
  async.waterfall([
    
    // First async function
    function(callback) {
      // Connect to database
      connection.connect(function(err){
        if (err) {
          throw err;
          }
        // Print that you have connected successfully
        console.log("Async Connection Success");
        // Query the database to retrieve all rows from table "urls"
        connection.query('SELECT * FROM urls', function(err, result) {
          if (err) throw err;
    
          // For each row, add to list
          result.forEach(function(item) {
            myrows.push(item)
          });
          // End connection to database
          callback(null, myrows);
          connection.end((err) => { });
        });
      });
      
    }
    
  ],
  // Second function that runs to send sql data to front end (client side browser)
  function(err, myrows){
    // Display data in terminal
    console.log("my rows: ", myrows)

    // send db rows to front end with send method
    res.send(myrows)
  });

  
})

// Express server is listening for data coming to the backend on port (specified at top of file)
app.listen(port, () => {
  console.log("Server listening on port: " + String(port))
})







