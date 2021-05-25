console.log("Running Content.js")
//var currentLocation = window.location.href;
//console.log("Number 1", currentLocation); 





window.onload = (event) => {
  
  var currentLocation = window.location.href;
  //console.log(currentLocation);
  // split url here
  let company_name = currentLocation.split(".")[1]
  console.log(company_name)

  // load all database URLs
  //[url_page] = load("/path/file.js")

  //for url in url_page:
  //  if company_name == url:
  //    alert("BAD")
};
  