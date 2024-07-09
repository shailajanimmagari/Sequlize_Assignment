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
const books_1 = __importDefault(require("./models/books"));
const authors_1 = __importDefault(require("./models/authors"));
const loans_1 = __importDefault(require("./models/loans"));
const members_1 = __importDefault(require("./models/members"));
const Associations = () => __awaiter(void 0, void 0, void 0, function* () {
    // Books and Authors
    books_1.default.belongsTo(authors_1.default, { foreignKey: 'authorId' });
    authors_1.default.hasMany(books_1.default, { foreignKey: 'authorId' });
    //Loans, Members and Books
    books_1.default.hasMany(loans_1.default, { foreignKey: 'book_id' });
    loans_1.default.belongsTo(books_1.default, { foreignKey: 'book_id' });
    members_1.default.hasMany(loans_1.default, { foreignKey: 'member_id' });
    loans_1.default.belongsTo(members_1.default, { foreignKey: 'member_id' });
});
/*Reservations, Books, Members
Member.hasMany(Reservation,{foreignKey:'member_id'});
Reservation.belongsTo(Member,{foreignKey:'member_id'});
Book.hasMany(Reservation,{foreignKey:'book_id'});
Reservation.belongsTo(Book,{foreignKey:'book_id'});
}*/
exports.default = Associations;
