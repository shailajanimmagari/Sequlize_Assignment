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
  indexes:[
    {
      unique: true,
      fields:['name'] // adding index for name column
    }
  ]
  
});

export default Author;
