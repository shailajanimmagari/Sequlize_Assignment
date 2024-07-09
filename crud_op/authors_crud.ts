import Book from '../models/books';
import Author from '../models/authors';

// Example of creating a new author
async function createAuthor() {
  try {
    const newAuthor = await Author.create({
      name: 'Arjun',
      birth_year: '2000',
      nationality: 'American'
    });

    console.log('New author created:', newAuthor);
  } catch (error) {
    console.error('Error creating author:', error);
  }
}

// Call the createAuthor function to execute the creation
createAuthor();

// Example of reading all authors
async function readAuthors() {
    try {
      const authors = await Author.findAll();
      console.log('All authors:', authors);
    } catch (error) {
      console.error('Error fetching authors:', error);
    }
  }
  
  // Call the readAuthors function to execute the read operation
  readAuthors();
  
  // Example of updating an author
async function updateAuthor(authorId: any, updatedFields: any) {
    try {
      const author = await Author.findByPk(authorId);
      if (author) {
        await author.update(updatedFields);
        console.log('Author updated successfully.');
      } else {
        console.error('Author not found.');
      }
    } catch (error) {
      console.error('Error updating author:', error);
    }
  }
  
  updateAuthor(4, { name: 'Devadas' });

  
  async function deleteAuthor(authorId : any) {
    try {
      // First, find all books associated with the author
      const books = await Book.findAll({ where: { authorId } });
  
      // Delete each book record
      for (let book of books) {
        await book.destroy();
      }
  
      // Now delete the author
      const author = await Author.findByPk(authorId);
      if (author) {
        await author.destroy();
        console.log('Author deleted successfully.');
      } else {
        console.error('Author not found.');
      }
    } catch (error) {
      console.error('Error deleting author:', error);
    }
  }
  
  
  deleteAuthor(9);
  
  
  
