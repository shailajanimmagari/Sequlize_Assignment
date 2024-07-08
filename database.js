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
var con_1 = require("./con");
var authors_1 = require("./models/authors");
var books_1 = require("./models/books");
var loans_1 = require("./models/loans");
var members_1 = require("./models/members");
var insert_data_1 = require("./insert_data");
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, con_1.default.authenticate()];
                case 1:
                    _a.sent();
                    console.log('Connection has been established');
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.error('Unable to connect to the database:', error_1);
                    return [3 /*break*/, 3];
                case 3: return [4 /*yield*/, authors_1.default.sync({ force: true })];
                case 4:
                    _a.sent();
                    console.log('Author model is created');
                    return [4 /*yield*/, authors_1.default.bulkCreate(insert_data_1.authorsData)];
                case 5:
                    _a.sent();
                    console.log('Authors inserted successfully');
                    return [4 /*yield*/, books_1.default.sync({ force: true })];
                case 6:
                    _a.sent();
                    console.log('Book model is created');
                    return [4 /*yield*/, books_1.default.bulkCreate(insert_data_1.booksData)];
                case 7:
                    _a.sent();
                    console.log('Books inserted successfully');
                    return [4 /*yield*/, members_1.default.sync({ force: true })];
                case 8:
                    _a.sent();
                    console.log('Member model is created');
                    return [4 /*yield*/, members_1.default.bulkCreate(insert_data_1.membersData)];
                case 9:
                    _a.sent();
                    console.log('Members inserted successfully');
                    return [4 /*yield*/, loans_1.default.sync({ force: true })];
                case 10:
                    _a.sent();
                    console.log('Loan model is created');
                    return [4 /*yield*/, loans_1.default.bulkCreate(insert_data_1.loansData)];
                case 11:
                    _a.sent();
                    console.log('Loans inserted successfully');
                    return [2 /*return*/];
            }
        });
    });
}
main();
exports.default = con_1.default;
console.table(books_1.default);
