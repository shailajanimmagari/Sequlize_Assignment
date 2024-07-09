import  { Request, Response } from 'express';
const express=require('express');
import Author from '../models/authors'; // Adjust path based on your project structure


const router = express.Router();

// Middleware to parse JSON request body
router.use(express.json());

// Get all authors
router.get('/', async (req: Request, res: Response) => {
    try {
        const authors = await Author.findAll();
        res.json(authors);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
});

// Get one author by ID
router.get('/:id', async (req: Request, res: Response) => {
    try {
        const author = await Author.findByPk(req.params.id);
        if (!author) {
            return res.status(404).json({ message: 'Author not found' });
        }
        res.json(author);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
});

// Create a new author
router.post('/', async (req: Request, res: Response) => {
    try {
        const newAuthor = await Author.create(req.body);
        res.status(201).json(newAuthor);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
});

// Update an author
router.put('/:id', async (req: Request, res: Response) => {
    try {
        const [updatedRowsCount, updatedAuthors] = await Author.update(req.body, {
            where: { id: req.params.id },
            returning: true, // Return the updated author objects
        });
        if (updatedRowsCount === 0) {
            return res.status(404).json({ message: 'Author not found' });
        }
        res.json(updatedAuthors[0]); // Return the updated author
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
});

// Delete an author
router.delete('/:id', async (req: Request, res: Response) => {
    try {
        const deletedRowCount = await Author.destroy({ where: { id: req.params.id } });
        if (deletedRowCount === 0) {
            return res.status(404).json({ message: 'Author not found' });
        }
        res.json({ message: 'Author deleted successfully' });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
