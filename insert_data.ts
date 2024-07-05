/* import { sequelizeInstance } from './database';
import Book from './books';

async function insertBooks() {
  try {
    const booksData = [
      {
        title: 'The Goal',
        authorId: 1, // Corrected to match the case in your Book model
        genre: 'Novel',
        isbn: '1234567890',
        publication_year: 2020
      },
      {
        title: 'Stop Being Lazy',
        authorId: 2, // Corrected to match the case in your Book model
        genre: 'Personal Development',
        isbn: '2345678901',
        publication_year: 2021
      },
      {
        title: 'Music Speaks',
        authorId: 3, // Corrected to match the case in your Book model
        genre: 'Music',
        isbn: '3456789012',
        publication_year: 2021
      },
      {
        title: 'Soft Skills',
        authorId: 4, // Corrected to match the case in your Book model
        genre: 'Non-fiction',
        isbn: '4567890123',
        publication_year: 2022
      },
    ];

    const insertedBooks = await Book.bulkCreate(booksData);
    console.log('Books inserted:', insertedBooks.map(book => book.toJSON()));
  } catch (error) {
    console.error('Error inserting books:', error);
  } finally {
    // Optionally, close any connections or resources if needed
    await sequelizeInstance.close();
  }
}

insertBooks()*/
