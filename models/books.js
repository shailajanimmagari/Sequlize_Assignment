"use strict";
// // models/books.ts
Object.defineProperty(exports, "__esModule", { value: true });
// import { DataTypes, Sequelize } from 'sequelize';
// import {sequelize} from '../database'; // Assuming 'database.ts' exports 'sequelize'
// const Book = sequelize.define('Book', {
//     id: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     title: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     authorId: {
//         type: DataTypes.INTEGER,
//         references: {
//             model: 'authors',
//             key: 'id'
//         }
//     },
//     genre: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     isbn: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         unique: true
//     },
//     publication_year: {
//         type: DataTypes.INTEGER
//     }
// }, {
//     tableName: 'books'
// });
// export default Book;
// books.ts
var sequelize_1 = require("sequelize");
var database_1 = require("../database"); // Adjust the path as per your file structure
var Book = database_1.sequelize.define('Book', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    authorId: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: 'authors',
            key: 'id'
        }
    },
    genre: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    isbn: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    publication_year: {
        type: sequelize_1.DataTypes.INTEGER
    }
}, {
    tableName: 'books'
});
exports.default = Book;
