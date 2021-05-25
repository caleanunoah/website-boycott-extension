console.log("Running Content.js")
//var currentLocation = window.location.href;
//console.log("Number 1", currentLocation); 


var banned_names = [
  "benjerrys",
  "benjerry",
  "ben-jerry",
  "benandjerrys",
  "benandjerry",
  "ben-jerrys",
]



window.onload = (event) => {
  
  var currentLocation = window.location.href;
  //console.log(currentLocation);
  // split url here
  let company_name = currentLocation.split(".")[1]
  console.log(company_name);

  if (banned_names.includes(company_name)){
    alert("This company supports Israel");
  }

  //for url in url_page:
  //  if company_name == url:
  //    alert("BAD")
};

