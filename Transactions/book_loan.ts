import sequelize from '../con'; 
import Book from '../models/books'; 
import Loan from '../models/loans'; 
import Member from '../models/members'


async function createLoanTransaction(bookId: number, memberId: number, loanDate: Date, dueDate: Date) {
  const t = await sequelize.transaction(); // Start a Sequelize transaction

  try {

    const book = await Book.findByPk(bookId, { transaction: t });
    if (!book) {
      throw new Error(`Book with id ${bookId} not found.`);
    }


    const member = await Member.findByPk(memberId, { transaction: t });
    if (!member) {
      throw new Error(`Member with id ${memberId} not found.`);
    }

    // Create the loan record
    const loan = await Loan.create({
      book_id: bookId,
      member_id: memberId,
      loan_date: loanDate,
      due_date: dueDate
    }, { transaction: t });

  
    await t.commit();
    
   
    return loan;
  } catch (error) {
    
    await t.rollback();
    throw error;
  }
}


createLoanTransaction(1, 2, new Date(), new Date())
  .then((createdLoan) => {
    console.log('Loan created successfully:', createdLoan);
  })
  .catch((error) => {
    console.error('Error creating loan:', error);
  });
