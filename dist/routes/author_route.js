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
const authors_1 = __importDefault(require("../models/authors")); // Adjust path based on your project structure
const router = express_1.default.Router();
// Middleware to parse JSON request body
router.use(express_1.default.json());
// Get all authors
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const authors = yield authors_1.default.findAll();
        res.json(authors);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}));
// Get one author by ID
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const author = yield authors_1.default.findByPk(req.params.id);
        if (!author) {
            return res.status(404).json({ message: 'Author not found' });
        }
        res.json(author);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}));
// Create a new author
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newAuthor = yield authors_1.default.create(req.body);
        res.status(201).json(newAuthor);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}));
// Update an author
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [updatedRowsCount, updatedAuthors] = yield authors_1.default.update(req.body, {
            where: { id: req.params.id },
            returning: true, // Return the updated author objects
        });
        if (updatedRowsCount === 0) {
            return res.status(404).json({ message: 'Author not found' });
        }
        res.json(updatedAuthors[0]); // Return the updated author
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}));
// Delete an author
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedRowCount = yield authors_1.default.destroy({ where: { id: req.params.id } });
        if (deletedRowCount === 0) {
            return res.status(404).json({ message: 'Author not found' });
        }
        res.json({ message: 'Author deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}));
exports.default = router;
