import { DataTypes } from 'sequelize';
import sequelize from '../con';





const Book = sequelize.define('Book', {
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
  tableName: 'books',
  indexes:[
    {
      unique: true,
      fields:['authorId']//Here, we create a unique index on field of authorId
    } 
  ]
});


export default Book;
