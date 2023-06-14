// Set up imports
const express = require('express');
const app = express();
//Make sure to import the functions from the mean, median, and mode files
//make sure to import the ExpressError class from the ExpressError file
// need to use json
app.use(express.json());

// Set up routes
//NOTE - 3 routes ones for the mean, median, and mode
//* Operations are invoked via one route, with the operation specified in the body of the request

app.get("/mean", function(req, res, next) {
    console.log("Mean route hit");
});

app.get("/median", function(req, res, next) {
    console.log("Median route hit");
});

app.get("/mode", function(req, res, next) {
    console.log("Mode route hit");
});

//NOTE - include necessary way to handle error as well as initialize the ability to listen for the app
app.use(function(req, res, next) {
    let status = err.status || 500;
    let message = err.message;

    return res.status(status).json({
        error: {message, status}
    });
});

app.listen(3000, function() {
    console.log("Server is listening on port 3000");
});