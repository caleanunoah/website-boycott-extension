console.log("Running Content.js") 

// Array of banned companies (supporting/funding Israel)
var banned_names = [
  "berman",
  "benjerrys",
  "benjerry",
  "ben-jerry",
  "benandjerrys",
  "benandjerry",
  "ben-jerrys",
] 



window.onload = (event) => {
  
  
  // get url of current tab
  var currentLocation = window.location.href;
  console.log(currentLocation)

  // _________________________________________________________________________________________________
  //
  // Method 1: take the entire url and check if banned name is located in it

  let company_name = currentLocation                        // Method 1 company_name

  for (var i=0; i < banned_names.length; i++) {             // check if company name is a banned name
    if (company_name.includes(banned_names[i])){            
      alert("This company supports Israel");
    }
  }
   

  
  // _________________________________________________________________________________________________
  //
  // Method 2: Parse through banned names and see if current url company name is located in it

  /*
  let company_name = currentLocation.split(".")[1]        // Method 2 company_name
  
  if (banned_names.includes(company_name)){               // check if company name is a banned name
    alert("This company supports Israel");
  }

  */

};

