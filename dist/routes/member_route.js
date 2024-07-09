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
const members_1 = __importDefault(require("../models/members")); // Adjust path based on your project structure
const router = express_1.default.Router();
// Middleware to parse JSON request body
router.use(express_1.default.json());
// GET all members
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const members = yield members_1.default.findAll();
        res.json(members);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}));
// GET one member by ID
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const member = yield members_1.default.findByPk(req.params.id);
        if (!member) {
            return res.status(404).json({ message: 'Member not found' });
        }
        res.json(member);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}));
// CREATE a new member
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newMember = yield members_1.default.create(req.body);
        res.status(201).json(newMember);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}));
// UPDATE a member
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [updatedRowsCount, updatedMembers] = yield members_1.default.update(req.body, {
            where: { id: req.params.id },
            returning: true, // Return the updated member objects
        });
        if (updatedRowsCount === 0) {
            return res.status(404).json({ message: 'Member not found' });
        }
        res.json(updatedMembers[0]); // Return the updated member
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}));
// DELETE a member
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedRowCount = yield members_1.default.destroy({ where: { id: req.params.id } });
        if (deletedRowCount === 0) {
            return res.status(404).json({ message: 'Member not found' });
        }
        res.json({ message: 'Member deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}));
exports.default = router;
