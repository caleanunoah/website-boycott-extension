# website-boycott-extension

## Description/Summary

* App to take first part of URL and check if it contains any "banned" names

## File Breakdown
* **app.js** is the server side script that starts an Express server (using driver "express"). Then it queries a SQL database (using the driver "mysql") and posts the data on localhost:3000 (must have localhost open for data to return from the sql connection)
* **content.js** is the script that runs on the browser and executes everytime the page is refreshed
* **index.html** is the extension content that can be viewed by

## How to Run App

1. Clone the repo
2. Navigate to [chrome extensions](chrome://extensions/)
3. Click "Load unpacked" and select the cloned repo folder 
      * Extension should be visible now
      <img src="https://user-images.githubusercontent.com/43590970/129492056-28c29645-85f0-4eed-9b78-c65a015181c0.png" height="300" width="auto">
      
4. Pin the extension

      <img src="https://user-images.githubusercontent.com/43590970/129492116-2b6be7f3-3b0f-45cf-939f-e9e123cc11b9.png" height="300" width="auto">

5. Open the project in [cmd terminal](https://www.thewindowsclub.com/how-to-open-command-prompt-from-right-click-menu)
6. run "npm install" to download all dependencies
7. Open [localhost:3000](http://localhost:3000/) in browser
8. run "node app.js" to launch server

   * After this step you should see (terminal):
   <img src="https://user-images.githubusercontent.com/43590970/129491724-896f3f79-0b13-4f7d-ab61-711fa8d67fb6.png" height="300" width="auto">

   * Browser:
   <img src="https://user-images.githubusercontent.com/43590970/129491727-950e7c30-6dbb-459c-9f23-57f5eb3551cb.png" height="150" width="auto">

