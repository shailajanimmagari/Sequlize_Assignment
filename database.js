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
const con_1 = __importDefault(require("./con"));
const authors_1 = __importDefault(require("./models/authors"));
const books_1 = __importDefault(require("./models/books"));
const loans_1 = __importDefault(require("./models/loans"));
const members_1 = __importDefault(require("./models/members"));
const associations_1 = __importDefault(require("./associations"));
const insert_data_1 = require("./insert_data");
/*import express from 'express';
import bodyParser from 'body-parser';
import authorRouter from './routes/author_route';*/
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield con_1.default.authenticate();
            console.log('Connection has been established');
            (0, associations_1.default)();
        }
        catch (error) {
            console.error('Unable to connect to the database:', error);
        }
        yield authors_1.default.sync({ force: true });
        console.log('Author model is created');
        yield authors_1.default.bulkCreate(insert_data_1.authorsData);
        console.log('Authors inserted successfully');
        yield books_1.default.sync({ force: true });
        console.log('Book model is created');
        yield books_1.default.bulkCreate(insert_data_1.booksData);
        console.log('Books inserted successfully');
        yield members_1.default.sync({ force: true });
        console.log('Member model is created');
        yield members_1.default.bulkCreate(insert_data_1.membersData);
        console.log('Members inserted successfully');
        yield loans_1.default.sync({ force: true });
        console.log('Loan model is created');
        yield loans_1.default.bulkCreate(insert_data_1.loansData);
        console.log('Loans inserted successfully');
    });
}
main();
/*const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use('/api/authors', authorRouter);
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});*/
exports.default = con_1.default;
