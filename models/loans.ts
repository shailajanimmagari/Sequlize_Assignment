import { DataTypes } from 'sequelize';
import sequelize from '../con';

const Loan = sequelize.define('Loan', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  book_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'books',
      key: 'id'
    }
  },
  member_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'members',
      key: 'id'
    }
  },
  loan_date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  due_date: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  tableName: 'loans',
  indexes:[
    {
      unique: true,
      fields:['book_id']
    }
  ]
  
});

export default Loan;
