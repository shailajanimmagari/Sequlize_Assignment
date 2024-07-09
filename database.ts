
import sequelize from './con';
import Author from './models/authors';
import Book from './models/books';
import Loan from './models/loans';
import Member from './models/members';
import  Associations  from './associations';
import { authorsData, booksData, loansData, membersData } from './insert_data';
/*import express from 'express';
import bodyParser from 'body-parser';
import authorRouter from './routes/author_route';*/


async function main() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established');
    Associations()
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
    await Author.sync({ force: true });
    console.log('Author model is created');
    await Author.bulkCreate(authorsData);
    console.log('Authors inserted successfully');
    
    await Book.sync({ force: true });
    console.log('Book model is created');
    await Book.bulkCreate(booksData);
    console.log('Books inserted successfully');

  

    await Member.sync({ force: true });
    console.log('Member model is created');
    await Member.bulkCreate(membersData);
    console.log('Members inserted successfully');
    await Loan.sync({ force: true });
    console.log('Loan model is created');
    await Loan.bulkCreate(loansData);
    console.log('Loans inserted successfully');
  
  }


main();

/*const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use('/api/authors', authorRouter);
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});*/
export default sequelize;

