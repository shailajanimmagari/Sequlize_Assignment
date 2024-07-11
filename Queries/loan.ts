import { loansData } from '../insert_data';
import sequelize from '../con';
import Loan from '../models/loans';


async function someQueries() {
    try {
      // Find all loans
      const allLoans = await Loan.findAll();
      console.log('All Loans:', allLoans.map(loan => loan.toJSON()));
  
      // Find loans where the loan_date is after a specific date
      const recentLoans = await Loan.findAll({
        where: {
          loan_date: '2024-7-8'
        
        }
      });
      console.log('Recent Loans:', recentLoans.map(loan => loan.toJSON()));
  
      // Find a loan by member_id
      const loansForMember = await Loan.findAll({
        where: {
          member_id: 1 // Example: Find loans for member with ID 1
        }
      });
      console.log('Loans for Member:', loansForMember.map(loan => loan.toJSON()));
  
      // Delete a loan by ID
      const loanToDelete = await Loan.findByPk(1); // Example: Find loan with ID 1
      if (loanToDelete) {
        await loanToDelete.destroy();
        console.log('Loan deleted successfully!');
      } else {
        console.log('Loan not found!');
      }
  
    } catch (error) {
      console.error('Error running queries:', error);
    }
  }
  
  // Assuming you have already inserted some loans and then calling the function
  someQueries();