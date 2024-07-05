import { DataTypes } from 'sequelize';
import { sequelizeInstance } from '../database';

const Author = sequelizeInstance.define('Author', {
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
    type: DataTypes.INTEGER
  },
  nationality: {
    type: DataTypes.STRING
  }
}, {
  tableName: 'authors'
});

export default Author;
