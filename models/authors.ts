import { DataTypes } from 'sequelize';
import sequelize from '../con';

const Author = sequelize.define('Author', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  birth_year: {
    type: DataTypes.STRING,
    allowNull: false
  },
  nationality: {
    type: DataTypes.STRING
  }
}, {
  tableName: 'authors',
  timestamps: false // If you don't want createdAt and updatedAt fields
});

export default Author;
