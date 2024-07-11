import { booksData } from '../insert_data';
import sequelize from '../con';
import Book from '../models/books';


// Function to insert authors data into the database
async function insertBooks() {
  try {
    // Sync the model with the database
    await sequelize.sync({ force: true }); // This will create the table if it doesn't exist and drop it if it does
    await Book.bulkCreate(booksData);
    console.log('Books inserted successfully!');
  } catch (error) {
    console.error('Error inserting books:', error);
  }
}

async function someQueries(){
    try{
        const allBooks= await Book.findAll();
        console.log(allBooks);

        const thegoalBook= await Book.findAll({
            where :{
                title: 'The Goal'
            }
        });
        console.log(thegoalBook);
      
        const bookToDelete = await Book.findOne({
            where: {
              genre: 'Non-fiction'
            }
          });
          if (bookToDelete) {
            await bookToDelete.destroy();
            console.log('book deleted successfully!');
          } else {
            console.log('book not found!');
          }
      
        } catch (error) {
          console.error('Error running queries:', error);
        }
      }
      
      
      insertBooks().then(() => {
        
        someQueries();
      });
        


