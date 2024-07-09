

// routes/book_route.ts

import { Request, Response } from 'express';
const express=require('express');
import Book from '../models/books'; // Adjust path based on your project structure

const router = express.Router();

// Middleware to parse JSON request body
router.use(express.json());

// Get all books
router.get('/', async (req: Request, res: Response) => {
  try {
    const books = await Book.findAll();
    res.json({ books });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching books', error });
  }
});

// Get a specific book by ID
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const bookId = parseInt(req.params.id, 10);
    const book = await Book.findByPk(bookId);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json(book);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching book', error });
  }
});

// Create a new book
router.post('/', async (req: Request, res: Response) => {
  try {
    const { title, authorId, genre, isbn, publication_year } = req.body;
    const newBook = await Book.create({
      title,
      authorId,
      genre,
      isbn,
      publication_year
    });
    res.status(201).json(newBook);
  } catch (error) {
    res.status(400).json({ message: 'Error creating book', error });
  }
});

// Update a book by ID
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const bookId = parseInt(req.params.id, 10);
    const updatedFields = req.body;
    const book = await Book.findByPk(bookId);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    await book.update(updatedFields);
    res.json({ message: 'Book updated successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Error updating book', error });
  }
});

// Delete a book by ID
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const bookId = parseInt(req.params.id, 10);
    const book = await Book.findByPk(bookId);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    await book.destroy();
    res.json({ message: 'Book deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting book', error });
  }
});

export default router;
