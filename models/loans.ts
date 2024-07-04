// models/loans.ts

import { DataTypes } from 'sequelize';
import {sequelize} from '../database'; // Assuming 'database.ts' exports 'sequelize'

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
    tableName: 'loans'
});

export default Loan;
