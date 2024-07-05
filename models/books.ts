import { DataTypes } from 'sequelize';
import { sequelizeInstance } from '../database';


const Book = sequelizeInstance.define('Book', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  authorId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'authors',
      key: 'id'
    }
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  isbn: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  publication_year: {
    type: DataTypes.INTEGER
  }
}, {
  tableName: 'books'
});


export default Book;
