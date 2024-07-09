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
const loans_1 = __importDefault(require("../models/loans")); // Adjust the path as needed
function createLoan(bookId, memberId, loanDate, dueDate) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newLoan = yield loans_1.default.create({
                book_id: bookId,
                member_id: memberId,
                loan_date: 2024 - 7 - 9,
                due_date: 2024 - 7 - 10
            });
            console.log('New loan created:', newLoan.toJSON());
        }
        catch (error) {
            console.error('Error creating loan:', error);
        }
    });
}
// Example usage
createLoan(1, 2, new Date('2024-07-15'), new Date('2024-08-15'));
function findLoanById(loanId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const loan = yield loans_1.default.findByPk(loanId);
            if (loan) {
                console.log('Found loan:', loan.toJSON());
            }
            else {
                console.log('Loan not found.');
            }
        }
        catch (error) {
            console.error('Error finding loan:', error);
        }
    });
}
// Example usage
findLoanById(1);
function updateLoan(loanId, updates) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const loan = yield loans_1.default.findByPk(loanId);
            if (loan) {
                yield loan.update(updates);
                console.log('Loan updated successfully.');
            }
            else {
                console.log('Loan not found.');
            }
        }
        catch (error) {
            console.error('Error updating loan:', error);
        }
    });
}
// Example usage
updateLoan(1, { loanDate: new Date('2024-07-20') });
function deleteLoan(loanId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const loan = yield loans_1.default.findByPk(loanId);
            if (loan) {
                yield loan.destroy();
                console.log('Loan deleted successfully.');
            }
            else {
                console.log('Loan not found.');
            }
        }
        catch (error) {
            console.error('Error deleting loan:', error);
        }
    });
}
// Example usage
deleteLoan(1);
