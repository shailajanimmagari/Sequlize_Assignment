
// import express from 'express';
const express=require('express');
// import bodyParser from 'body-parser';
const bodyParser=require('body-parser');
import authorrouter from './routes/author_route';
import bookrouter from './routes/book_route'; // Adjust path based on your project structure
import memberRouter from './routes/member_route';
import loanRouter from './routes/loan_route'; 
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Use authorRouter for routes starting with /authors
app.use('/authors', authorrouter);
app.use('/books', bookrouter);
app.use('/members', memberRouter);
app.use('/loans', loanRouter);


// Start the Express server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
