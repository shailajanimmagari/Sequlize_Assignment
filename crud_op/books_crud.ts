
import Author from '../models/authors';
import Book from '../models/books';
 
async function createBook() {
    try {
      const newBook = await Book.create({
        title: 'The Legend',
        authorId: 5, // Example authorId
        genre: 'Fiction',
        isbn: '12345678930',
        publication_year: 2020
      });
  
      console.log('New book created:', newBook.toJSON());
    } catch (error) {
      console.error('Error creating book:', error);
    }
  }
  createBook();

  async function readBooks() {
    try {
      const books = await Book.findAll({
        include: Author
        
      });
  
      console.log('All books:', books.map(book => book.toJSON()));

    } catch (error) {
      console.error('Error fetching books:', error);
    }
  }
  readBooks();

  async function updateBook(bookId: number, updatedFields: Partial<any>) {
    try {
      const book = await Book.findByPk(bookId);
      if (book) {
        await book.update(updatedFields);
        console.log('Book updated successfully.');
      } else {
        console.error('Book not found.');
      }
    } catch (error) {
      console.error('Error updating book:', error);
    }
  }

  updateBook(2, {title:'Manadhe Idhantha'});

  async function deleteBook(bookId: number) {
    try {
      const book = await Book.findByPk(bookId);
      if (book) {
        await book.destroy();
        console.log('Book deleted successfully.');
      } else {
        console.error('Book not found.');
      }
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  }

  deleteBook(6);