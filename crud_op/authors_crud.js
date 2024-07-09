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
var books_1 = require("../models/books");
var authors_1 = require("../models/authors");
// Example of creating a new author
function createAuthor() {
    return __awaiter(this, void 0, void 0, function () {
        var newAuthor, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, authors_1.default.create({
                            name: 'Arjun',
                            birth_year: '2000',
                            nationality: 'American'
                        })];
                case 1:
                    newAuthor = _a.sent();
                    console.log('New author created:', newAuthor);
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.error('Error creating author:', error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
// Call the createAuthor function to execute the creation
createAuthor();
// Example of reading all authors
function readAuthors() {
    return __awaiter(this, void 0, void 0, function () {
        var authors, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, authors_1.default.findAll()];
                case 1:
                    authors = _a.sent();
                    console.log('All authors:', authors);
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    console.error('Error fetching authors:', error_2);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
// Call the readAuthors function to execute the read operation
readAuthors();
// Example of updating an author
function updateAuthor(authorId, updatedFields) {
    return __awaiter(this, void 0, void 0, function () {
        var author, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    return [4 /*yield*/, authors_1.default.findByPk(authorId)];
                case 1:
                    author = _a.sent();
                    if (!author) return [3 /*break*/, 3];
                    return [4 /*yield*/, author.update(updatedFields)];
                case 2:
                    _a.sent();
                    console.log('Author updated successfully.');
                    return [3 /*break*/, 4];
                case 3:
                    console.error('Author not found.');
                    _a.label = 4;
                case 4: return [3 /*break*/, 6];
                case 5:
                    error_3 = _a.sent();
                    console.error('Error updating author:', error_3);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
// Usage: Update an author with ID 1
updateAuthor(4, { name: 'Devadas' });
function deleteAuthor(authorId) {
    return __awaiter(this, void 0, void 0, function () {
        var books, _i, books_2, book, author, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 10, , 11]);
                    return [4 /*yield*/, books_1.default.findAll({ where: { authorId: authorId } })];
                case 1:
                    books = _a.sent();
                    _i = 0, books_2 = books;
                    _a.label = 2;
                case 2:
                    if (!(_i < books_2.length)) return [3 /*break*/, 5];
                    book = books_2[_i];
                    return [4 /*yield*/, book.destroy()];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    _i++;
                    return [3 /*break*/, 2];
                case 5: return [4 /*yield*/, authors_1.default.findByPk(authorId)];
                case 6:
                    author = _a.sent();
                    if (!author) return [3 /*break*/, 8];
                    return [4 /*yield*/, author.destroy()];
                case 7:
                    _a.sent();
                    console.log('Author deleted successfully.');
                    return [3 /*break*/, 9];
                case 8:
                    console.error('Author not found.');
                    _a.label = 9;
                case 9: return [3 /*break*/, 11];
                case 10:
                    error_4 = _a.sent();
                    console.error('Error deleting author:', error_4);
                    return [3 /*break*/, 11];
                case 11: return [2 /*return*/];
            }
        });
    });
}
deleteAuthor(9);
