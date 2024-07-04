"use strict";
// models/loans.ts
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var database_1 = require("../database"); // Assuming 'database.ts' exports 'sequelize'
var Loan = database_1.sequelize.define('Loan', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    book_id: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: 'books',
            key: 'id'
        }
    },
    member_id: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: 'members',
            key: 'id'
        }
    },
    loan_date: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    due_date: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    }
}, {
    tableName: 'loans'
});
exports.default = Loan;
