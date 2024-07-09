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
const authors_1 = __importDefault(require("../models/authors"));
const books_1 = __importDefault(require("../models/books"));
function createBook() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newBook = yield books_1.default.create({
                title: 'The Legend',
                authorId: 5, // Example authorId
                genre: 'Fiction',
                isbn: '12345678930',
                publication_year: 2020
            });
            console.log('New book created:', newBook.toJSON());
        }
        catch (error) {
            console.error('Error creating book:', error);
        }
    });
}
createBook();
function readBooks() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const books = yield books_1.default.findAll({
                include: authors_1.default
            });
            console.log('All books:', books.map(book => book.toJSON()));
        }
        catch (error) {
            console.error('Error fetching books:', error);
        }
    });
}
readBooks();
function updateBook(bookId, updatedFields) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const book = yield books_1.default.findByPk(bookId);
            if (book) {
                yield book.update(updatedFields);
                console.log('Book updated successfully.');
            }
            else {
                console.error('Book not found.');
            }
        }
        catch (error) {
            console.error('Error updating book:', error);
        }
    });
}
updateBook(2, { title: 'Manadhe Idhantha' });
function deleteBook(bookId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const book = yield books_1.default.findByPk(bookId);
            if (book) {
                yield book.destroy();
                console.log('Book deleted successfully.');
            }
            else {
                console.error('Book not found.');
            }
        }
        catch (error) {
            console.error('Error deleting book:', error);
        }
    });
}
deleteBook(6);
