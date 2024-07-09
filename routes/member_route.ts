import  { Request, Response } from 'express';
const express=require('express');
import Member from '../models/members'; // Adjust path based on your project structure

const router = express.Router();

// Middleware to parse JSON request body
router.use(express.json());

// GET all members
router.get('/', async (req: Request, res: Response) => {
    try {
        const members = await Member.findAll();
        res.json(members);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
});

// GET one member by ID
router.get('/:id', async (req: Request, res: Response) => {
    try {
        const member = await Member.findByPk(req.params.id);
        if (!member) {
            return res.status(404).json({ message: 'Member not found' });
        }
        res.json(member);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
});

// CREATE a new member
router.post('/', async (req: Request, res: Response) => {
    try {
        const newMember = await Member.create(req.body);
        res.status(201).json(newMember);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
});

// UPDATE a member
router.put('/:id', async (req: Request, res: Response) => {
    try {
        const [updatedRowsCount, updatedMembers] = await Member.update(req.body, {
            where: { id: req.params.id },
            returning: true, // Return the updated member objects
        });
        if (updatedRowsCount === 0) {
            return res.status(404).json({ message: 'Member not found' });
        }
        res.json(updatedMembers[0]); // Return the updated member
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
});

// DELETE a member
router.delete('/:id', async (req: Request, res: Response) => {
    try {
        const deletedRowCount = await Member.destroy({ where: { id: req.params.id } });
        if (deletedRowCount === 0) {
            return res.status(404).json({ message: 'Member not found' });
        }
        res.json({ message: 'Member deleted successfully' });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
