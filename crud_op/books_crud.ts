
/*import Book from './models/book'; 

export async function createBook(bookData: any): Promise<void> {
  try {
    await Book.create(bookData);
    console.log('Created book successfully');
  } catch (error) {
    console.error('Error creating book:', error);
    throw error;
  }
}


import { booksData } from './insert_data'; // Assuming booksData is imported from insert_data.ts
booksData.forEach(async (book) => {
  try {
    await createBook(book);
  } catch (error) {
    console.error('Error creating book:', error);
  }
});


export async function getAllBooks(): Promise<void> {
    try {
      const books = await Book.findAll();
      books.forEach(book => console.log(book.toJSON()));
      console.log('Retrieved all books successfully');
    } catch (error) {
      console.error('Error retrieving books:', error);
      throw error;
    }
  }
  
  getAllBooks();
  export async function getBookById(id: number): Promise<void> {
    try {
      const book = await Book.findByPk(id);
      if (book) {
        console.log('Book found:', book.toJSON());
      } else {
        console.log('Book not found');
      }
    } catch (error) {
      console.error('Error retrieving book:', error);
      throw error;
    }
  }
  const bookIdToFind = 1; 
  getBookById(bookIdToFind);

  export async function updateBook(id: number, updatedData: any): Promise<void> {
    try {
      const book = await Book.findByPk(id);
      if (book) {
        await book.update(updatedData);
        console.log('Book updated successfully');
      } else {
        console.log('Book not found');
      }
    } catch (error) {
      console.error('Error updating book:', error);
      throw error;
    }
  }
  

  const bookIdToUpdate = 1;
  const updatedData = {
    title: 'Updated Title',
    genre: 'Updated Genre',
  
  };

  updateBook(bookIdToUpdate, updatedData);
  
  export async function deleteBookById(id: number): Promise<void> {
    try {
      const book = await Book.findByPk(id);
      if (book) {
        await book.destroy();
        console.log('Book deleted successfully');
      } else {
        console.log('Book not found');
      }
    } catch (error) {
      console.error('Error deleting book:', error);
      throw error;
    }
  }
  
  
  const bookIdToDelete = 1; 
  deleteBookById(bookIdToDelete);*/