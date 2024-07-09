import  { Request, Response } from 'express';
const express=require('express');
import Loan from '../models/loans'; // Adjust path based on your project structure
import Member from '../models/members'; // Assuming Member model is defined
import Book from '../models/books'; // Assuming Book model is defined

const router = express.Router();

// Middleware to parse JSON request body
router.use(express.json());

// GET all loans
router.get('/', async (req: Request, res: Response) => {
    try {
        const loans = await Loan.findAll();
        res.json(loans);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
});

// GET one loan by ID
router.get('/:id', async (req: Request, res: Response) => {
    try {
        const loan = await Loan.findByPk(req.params.id);
        if (!loan) {
            return res.status(404).json({ message: 'Loan not found' });
        }
        res.json(loan);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
});

// CREATE a new loan
router.post('/', async (req: Request, res: Response) => {
    try {
        // Check if member_id and book_id exist
        const { member_id, book_id, loan_date, due_date } = req.body;
        const memberExists = await Member.findByPk(member_id);
        const bookExists = await Book.findByPk(book_id);
        
        if (!memberExists) {
            return res.status(400).json({ message: `Member with id ${member_id} does not exist` });
        }
        if (!bookExists) {
            return res.status(400).json({ message: `Book with id ${book_id} does not exist` });
        }

        const newLoan = await Loan.create({
            member_id,
            book_id,
            loan_date,
            due_date
        });
        res.status(201).json(newLoan);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
});

// UPDATE a loan
router.put('/:id', async (req: Request, res: Response) => {
    try {
        const { member_id, book_id, loan_date, due_date } = req.body;
        
        // Check if loan exists
        const loan = await Loan.findByPk(req.params.id);
        if (!loan) {
            return res.status(404).json({ message: 'Loan not found' });
        }

        // Check if member_id and book_id exist
        const memberExists = await Member.findByPk(member_id);
        const bookExists = await Book.findByPk(book_id);
        
        if (!memberExists) {
            return res.status(400).json({ message: `Member with id ${member_id} does not exist` });
        }
        if (!bookExists) {
            return res.status(400).json({ message: `Book with id ${book_id} does not exist` });
        }

        // Update loan record
        const updatedLoan = await Loan.update({
            member_id,
            book_id,
            loan_date,
            due_date
        }, {
            where: { id: req.params.id },
            returning: true, // Return the updated loan object
        });

        res.json(updatedLoan[1][0]); // Return the updated loan
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
});

// DELETE a loan
router.delete('/:id', async (req: Request, res: Response) => {
    try {
        const deletedRowCount = await Loan.destroy({ where: { id: req.params.id } });
        if (deletedRowCount === 0) {
            return res.status(404).json({ message: 'Loan not found' });
        }
        res.json({ message: 'Loan deleted successfully' });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
