// Set up imports
const express = require('express');
const app = express();

// need to use json
app.use(express.json());

// Set up routes
//NOTE - 3 routes ones for the mean, median, and mode