// Set up imports
const express = require("express");
const app = express();
const ExpressError = require("./expressError");
const { mean, median, mode, getQueryNums } = require("./helpers");

//Make sure to import the functions from the mean, median, and mode files
//make sure to import the ExpressError class from the ExpressError file
// need to use json
app.use(express.json());

// Set up routes
//NOTE - 3 routes ones for the mean, median, and mode
//* Operations are invoked via one route, with the operation specified in the body of the request

app.get("/", function (req, res, next) {
  console.log("Root route hit");
  return res.send("Root route hit");
});

app.get("/mean", function (req, res, next) {
  console.log("Mean route hit");
    //NOTE - get the nums from the query string
    //NOTE - make sure to validate the nums
    //NOTE - make sure to convert the nums to an array of numbers
    //NOTE - make sure to call the mean function and return the result
    //NOTE - make sure to handle errors
    //NOTE - make sure to return the result as json
    //NOTE - make sure to return the status code
    try {
        const nums = req.query.nums;
        if (!nums) {
            throw new ExpressError("You must pass a query key of nums with a comma-separated list of numbers.", 400);
        }
        const numsArr = Array.from(getQueryNums(nums));
        console.log(numsArr);
        console.log(typeof numsArr)
        const result = mean(numsArr);
        return res.json({ operation: "mean", value: result });
    } catch (error) {
        next(error);
    }    
});

app.get("/median", function (req, res, next) {
  console.log("Median route hit");
  try {
    const nums = req.query.nums;
    if (!nums) {
        throw new ExpressError(
            "You must pass a query key of nums with a comma-separated list of numbers.",
            400
        );
        }
        const numsArr = Array.from(getQueryNums(nums));
        const result = median(numsArr);
        return res.json({ operation: "median", value: result });
  } catch (error) {
    next(error);
  }
});

app.get("/mode", function (req, res, next) {
  console.log("Mode route hit");
    try {
        const nums = req.query.nums;
        if (!nums) {
            throw new ExpressError(
                "You must pass a query key of nums with a comma-separated list of numbers.",
                400
            );
        }
        const numsArr = Array.from(getQueryNums(nums));
        const result = mode(numsArr);
        return res.json({ operation: "mode", value: result });
    } catch (error) {
        next(error);
    }
});

//NOTE - include necessary way to handle error as well as initialize the ability to listen for the app
app.use(function (req, res, next) {
  let status = err.status || 500;
  let message = err.message;

  return res.status(status).json({
    error: { message, status },
  });
});

app.listen(3000, function () {
  console.log("Server is listening on port 3000");
});
