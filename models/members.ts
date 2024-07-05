import { DataTypes } from 'sequelize';
import { sequelizeInstance } from '../database';

const Member = sequelizeInstance.define('Member', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  address: {
    type: DataTypes.STRING
  },
  phone_number: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING,
    unique: true
  }
}, {
  tableName: 'members'
});

export default Member;
