"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const loans_1 = __importDefault(require("../models/loans")); // Adjust path based on your project structure
const members_1 = __importDefault(require("../models/members")); // Assuming Member model is defined
const books_1 = __importDefault(require("../models/books")); // Assuming Book model is defined
const router = express_1.default.Router();
// Middleware to parse JSON request body
router.use(express_1.default.json());
// GET all loans
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const loans = yield loans_1.default.findAll();
        res.json(loans);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}));
// GET one loan by ID
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const loan = yield loans_1.default.findByPk(req.params.id);
        if (!loan) {
            return res.status(404).json({ message: 'Loan not found' });
        }
        res.json(loan);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}));
// CREATE a new loan
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Check if member_id and book_id exist
        const { member_id, book_id, loan_date, due_date } = req.body;
        const memberExists = yield members_1.default.findByPk(member_id);
        const bookExists = yield books_1.default.findByPk(book_id);
        if (!memberExists) {
            return res.status(400).json({ message: `Member with id ${member_id} does not exist` });
        }
        if (!bookExists) {
            return res.status(400).json({ message: `Book with id ${book_id} does not exist` });
        }
        const newLoan = yield loans_1.default.create({
            member_id,
            book_id,
            loan_date,
            due_date
        });
        res.status(201).json(newLoan);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}));
// UPDATE a loan
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { member_id, book_id, loan_date, due_date } = req.body;
        // Check if loan exists
        const loan = yield loans_1.default.findByPk(req.params.id);
        if (!loan) {
            return res.status(404).json({ message: 'Loan not found' });
        }
        // Check if member_id and book_id exist
        const memberExists = yield members_1.default.findByPk(member_id);
        const bookExists = yield books_1.default.findByPk(book_id);
        if (!memberExists) {
            return res.status(400).json({ message: `Member with id ${member_id} does not exist` });
        }
        if (!bookExists) {
            return res.status(400).json({ message: `Book with id ${book_id} does not exist` });
        }
        // Update loan record
        const updatedLoan = yield loans_1.default.update({
            member_id,
            book_id,
            loan_date,
            due_date
        }, {
            where: { id: req.params.id },
            returning: true, // Return the updated loan object
        });
        res.json(updatedLoan[1][0]); // Return the updated loan
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}));
// DELETE a loan
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedRowCount = yield loans_1.default.destroy({ where: { id: req.params.id } });
        if (deletedRowCount === 0) {
            return res.status(404).json({ message: 'Loan not found' });
        }
        res.json({ message: 'Loan deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}));
exports.default = router;
