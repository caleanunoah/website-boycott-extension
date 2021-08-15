// Test message
console.log("Running Content.js")

// Array of banned companies (supporting/funding Israel)
// this will be replaced
var banned_names = [
  "berman",
  "benjerrys",
  "benjerry",
  "ben-jerry",
  "benandjerrys",
  "benandjerry",
  "ben-jerrys",
  "dodot.pt"
] 

// Window.onload will run everytime the user refreshes the tab
window.onload = (event) => {
  
  // get url of current tab
  var currentLocation = window.location.href;
  console.log(currentLocation)

  // Parse through banned names and see if current url company name is located in it
  let company_name = currentLocation.split(".")[1]        // Method 2 company_name
  
  // if the name appears in URL, alert the user
  if (banned_names.includes(company_name)){               // check if company name is a banned name
    alert("This company supports Israel");
  }

  

};

