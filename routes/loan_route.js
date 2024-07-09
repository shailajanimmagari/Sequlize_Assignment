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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var loans_1 = require("../models/loans"); // Adjust path based on your project structure
var members_1 = require("../models/members"); // Assuming Member model is defined
var books_1 = require("../models/books"); // Assuming Book model is defined
var router = express.Router();
// Middleware to parse JSON request body
router.use(express.json());
// GET all loans
router.get('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var loans, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, loans_1.default.findAll()];
            case 1:
                loans = _a.sent();
                res.json(loans);
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                res.status(500).json({ message: error_1.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
// GET one loan by ID
router.get('/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var loan, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, loans_1.default.findByPk(req.params.id)];
            case 1:
                loan = _a.sent();
                if (!loan) {
                    return [2 /*return*/, res.status(404).json({ message: 'Loan not found' })];
                }
                res.json(loan);
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                res.status(500).json({ message: error_2.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
// CREATE a new loan
router.post('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, member_id, book_id, loan_date, due_date, memberExists, bookExists, newLoan, error_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 4, , 5]);
                _a = req.body, member_id = _a.member_id, book_id = _a.book_id, loan_date = _a.loan_date, due_date = _a.due_date;
                return [4 /*yield*/, members_1.default.findByPk(member_id)];
            case 1:
                memberExists = _b.sent();
                return [4 /*yield*/, books_1.default.findByPk(book_id)];
            case 2:
                bookExists = _b.sent();
                if (!memberExists) {
                    return [2 /*return*/, res.status(400).json({ message: "Member with id ".concat(member_id, " does not exist") })];
                }
                if (!bookExists) {
                    return [2 /*return*/, res.status(400).json({ message: "Book with id ".concat(book_id, " does not exist") })];
                }
                return [4 /*yield*/, loans_1.default.create({
                        member_id: member_id,
                        book_id: book_id,
                        loan_date: loan_date,
                        due_date: due_date
                    })];
            case 3:
                newLoan = _b.sent();
                res.status(201).json(newLoan);
                return [3 /*break*/, 5];
            case 4:
                error_3 = _b.sent();
                res.status(400).json({ message: error_3.message });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); });
// UPDATE a loan
router.put('/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, member_id, book_id, loan_date, due_date, loan, memberExists, bookExists, updatedLoan, error_4;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 5, , 6]);
                _a = req.body, member_id = _a.member_id, book_id = _a.book_id, loan_date = _a.loan_date, due_date = _a.due_date;
                return [4 /*yield*/, loans_1.default.findByPk(req.params.id)];
            case 1:
                loan = _b.sent();
                if (!loan) {
                    return [2 /*return*/, res.status(404).json({ message: 'Loan not found' })];
                }
                return [4 /*yield*/, members_1.default.findByPk(member_id)];
            case 2:
                memberExists = _b.sent();
                return [4 /*yield*/, books_1.default.findByPk(book_id)];
            case 3:
                bookExists = _b.sent();
                if (!memberExists) {
                    return [2 /*return*/, res.status(400).json({ message: "Member with id ".concat(member_id, " does not exist") })];
                }
                if (!bookExists) {
                    return [2 /*return*/, res.status(400).json({ message: "Book with id ".concat(book_id, " does not exist") })];
                }
                return [4 /*yield*/, loans_1.default.update({
                        member_id: member_id,
                        book_id: book_id,
                        loan_date: loan_date,
                        due_date: due_date
                    }, {
                        where: { id: req.params.id },
                        returning: true, // Return the updated loan object
                    })];
            case 4:
                updatedLoan = _b.sent();
                res.json(updatedLoan[1][0]); // Return the updated loan
                return [3 /*break*/, 6];
            case 5:
                error_4 = _b.sent();
                res.status(400).json({ message: error_4.message });
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); });
// DELETE a loan
router.delete('/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var deletedRowCount, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, loans_1.default.destroy({ where: { id: req.params.id } })];
            case 1:
                deletedRowCount = _a.sent();
                if (deletedRowCount === 0) {
                    return [2 /*return*/, res.status(404).json({ message: 'Loan not found' })];
                }
                res.json({ message: 'Loan deleted successfully' });
                return [3 /*break*/, 3];
            case 2:
                error_5 = _a.sent();
                res.status(500).json({ message: error_5.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
exports.default = router;
