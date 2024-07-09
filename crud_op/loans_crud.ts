import Loan from '../models/loans'; // Adjust the path as needed

async function createLoan(bookId: number, memberId: number, loanDate: Date, dueDate: Date) {
  try {
    const newLoan = await Loan.create({
      book_id: bookId,
      member_id: memberId,
      loan_date: 2024-7-9,
      due_date: 2024-7-10
    });

    console.log('New loan created:', newLoan.toJSON());
  } catch (error) {
    console.error('Error creating loan:', error);
  }
}

// Example usage
createLoan(1, 2, new Date('2024-07-15'), new Date('2024-08-15'));

async function findLoanById(loanId: number) {
    try {
      const loan = await Loan.findByPk(loanId);
      if (loan) {
        console.log('Found loan:', loan.toJSON());
      } else {
        console.log('Loan not found.');
      }
    } catch (error) {
      console.error('Error finding loan:', error);
    }
  }
  
  // Example usage
  findLoanById(1);

  async function updateLoan(loanId: number, updates: Partial<{ bookId: number, memberId: number, loanDate: Date, dueDate: Date }>) {
    try {
      const loan = await Loan.findByPk(loanId);
      if (loan) {
        await loan.update(updates);
        console.log('Loan updated successfully.');
      } else {
        console.log('Loan not found.');
      }
    } catch (error) {
      console.error('Error updating loan:', error);
    }
  }
  
  // Example usage
  updateLoan(1, { loanDate: new Date('2024-07-20') });
  
  async function deleteLoan(loanId: number) {
    try {
      const loan = await Loan.findByPk(loanId);
      if (loan) {
        await loan.destroy();
        console.log('Loan deleted successfully.');
      } else {
        console.log('Loan not found.');
      }
    } catch (error) {
      console.error('Error deleting loan:', error);
    }
  }
  
  // Example usage
  deleteLoan(1);
  