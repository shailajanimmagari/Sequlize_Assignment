"use strict";
// routes/book_route.ts
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
const books_1 = __importDefault(require("../models/books")); // Adjust path based on your project structure
const router = express_1.default.Router();
// Middleware to parse JSON request body
router.use(express_1.default.json());
// Get all books
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const books = yield books_1.default.findAll();
        res.json({ books });
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching books', error });
    }
}));
// Get a specific book by ID
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookId = parseInt(req.params.id, 10);
        const book = yield books_1.default.findByPk(bookId);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.json(book);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching book', error });
    }
}));
// Create a new book
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, authorId, genre, isbn, publication_year } = req.body;
        const newBook = yield books_1.default.create({
            title,
            authorId,
            genre,
            isbn,
            publication_year
        });
        res.status(201).json(newBook);
    }
    catch (error) {
        res.status(400).json({ message: 'Error creating book', error });
    }
}));
// Update a book by ID
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookId = parseInt(req.params.id, 10);
        const updatedFields = req.body;
        const book = yield books_1.default.findByPk(bookId);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        yield book.update(updatedFields);
        res.json({ message: 'Book updated successfully' });
    }
    catch (error) {
        res.status(400).json({ message: 'Error updating book', error });
    }
}));
// Delete a book by ID
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookId = parseInt(req.params.id, 10);
        const book = yield books_1.default.findByPk(bookId);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        yield book.destroy();
        res.json({ message: 'Book deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error deleting book', error });
    }
}));
exports.default = router;
