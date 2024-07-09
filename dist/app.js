"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const author_route_1 = __importDefault(require("./routes/author_route"));
const book_route_1 = __importDefault(require("./routes/book_route")); // Adjust path based on your project structure
const member_route_1 = __importDefault(require("./routes/member_route"));
const loan_route_1 = __importDefault(require("./routes/loan_route"));
const app = (0, express_1.default)();
// Middleware to parse JSON request body
//app.use(express.json());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
// Use authorRouter for routes starting with /authors
app.use('/authors', author_route_1.default);
app.use('/books', book_route_1.default);
app.use('/members', member_route_1.default);
app.use('/loans', loan_route_1.default);
app.use((err, req, res) => {
    if (err instanceof SyntaxError && 'body' in err) {
        return res.status(400).json({ message: 'Invalid JSON' });
    }
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
});
// Start the Express server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
