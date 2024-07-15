import sequelize from '../con';
import Book from '../models/books'; 
import Member from '../models/members'; 


async function bookMemberTransaction() {
  const t = await sequelize.transaction();
  try {
    // Create a member
    const member = await Member.create({
      name: 'Kavya',
      address: 'AP',
      phone_number: '7646657433',
      email: 'kavya@gmail.com'
    }, { transaction: t });

    // Create a book
    const book = await Book.create({
      title: 'Peace',
      authorId: 1, 
      genre: 'Novel',
      isbn: '21345678903',
      publication_year: 2023
    }, { transaction: t });

    
    await t.commit();
    console.log('Transaction committed successfully.');
  } catch (error) {
 
    await t.rollback();
    console.error('Transaction rolled back due to error:', error);
  }
}
bookMemberTransaction();
