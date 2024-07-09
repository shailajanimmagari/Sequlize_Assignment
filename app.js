"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import express from 'express';
var express = require('express');
// import bodyParser from 'body-parser';
var bodyParser = require('body-parser');
var author_route_1 = require("./routes/author_route");
var book_route_1 = require("./routes/book_route"); // Adjust path based on your project structure
var member_route_1 = require("./routes/member_route");
var loan_route_1 = require("./routes/loan_route");
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Use authorRouter for routes starting with /authors
app.use('/authors', author_route_1.default);
app.use('/books', book_route_1.default);
app.use('/members', member_route_1.default);
app.use('/loans', loan_route_1.default);
// Start the Express server
var PORT = process.env.PORT || 8000;
app.listen(PORT, function () {
    console.log("Server is running on http://localhost:".concat(PORT));
});
