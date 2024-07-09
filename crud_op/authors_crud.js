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
const books_1 = __importDefault(require("../models/books"));
const authors_1 = __importDefault(require("../models/authors"));
// Example of creating a new author
function createAuthor() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newAuthor = yield authors_1.default.create({
                name: 'Arjun',
                birth_year: '2000',
                nationality: 'American'
            });
            console.log('New author created:', newAuthor);
        }
        catch (error) {
            console.error('Error creating author:', error);
        }
    });
}
// Call the createAuthor function to execute the creation
createAuthor();
// Example of reading all authors
function readAuthors() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const authors = yield authors_1.default.findAll();
            console.log('All authors:', authors);
            console.table(authors.map(author => author.toJSON));
        }
        catch (error) {
            console.error('Error fetching authors:', error);
        }
    });
}
// Call the readAuthors function to execute the read operation
readAuthors();
// Example of updating an author
function updateAuthor(authorId, updatedFields) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const author = yield authors_1.default.findByPk(authorId);
            if (author) {
                yield author.update(updatedFields);
                console.log('Author updated successfully.');
            }
            else {
                console.error('Author not found.');
            }
        }
        catch (error) {
            console.error('Error updating author:', error);
        }
    });
}
updateAuthor(4, { name: 'Devadas' });
function deleteAuthor(authorId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // First, find all books associated with the author
            const books = yield books_1.default.findAll({ where: { authorId } });
            // Delete each book record
            for (let book of books) {
                yield book.destroy();
            }
            // Now delete the author
            const author = yield authors_1.default.findByPk(authorId);
            if (author) {
                yield author.destroy();
                console.log('Author deleted successfully.');
            }
            else {
                console.error('Author not found.');
            }
        }
        catch (error) {
            console.error('Error deleting author:', error);
        }
    });
}
deleteAuthor(9);
