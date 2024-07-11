
// Import authorsData from insert_data.ts
import { authorsData } from '../insert_data';

// Assuming you have Sequelize set up in your `sequelize` instance
import sequelize from '../con'; // Adjust path as necessary
import Author from '../models/authors'; // Adjust path as necessary

// Function to insert authors data into the database
async function insertAuthors() {
  try {
    // Sync the model with the database
    await sequelize.sync({ force: true }); // This will create the table if it doesn't exist and drop it if it does

    // Insert authorsData into the database
    await Author.bulkCreate(authorsData);
    console.log('Authors inserted successfully!');
  } catch (error) {
    console.error('Error inserting authors:', error);
  }
}


async function runQueries() {
    try {
      // Find all authors
      const allAuthors = await Author.findAll();
      console.log('All Authors:');
      console.log(allAuthors);
  
     
      const indianAuthors = await Author.findAll({
        where: {
          nationality: 'India'
        }
      });
      console.log('Indian Authors:');
      console.log(indianAuthors);
  
      // Update an author's nationality
      /*const authorToUpdate = await Author.findOne({
        where: {
          name: 'Anusha'
        }
      });
      if (authorToUpdate) {
        authorToUpdate.nationality = 'Japan';
        await authorToUpdate.save();
        console.log('Author updated successfully!');
      } else {
        console.log('Author not found!');
      }*/
  
      // Delete an author
      const authorToDelete = await Author.findOne({
        where: {
          name: 'Sreeja'
        }
      });
      if (authorToDelete) {
        await authorToDelete.destroy();
        console.log('Author deleted successfully!');
      } else {
        console.log('Author not found!');
      }
  
    } catch (error) {
      console.error('Error running queries:', error);
    }
  }
  
  
  insertAuthors().then(() => {
    
    runQueries();
  });