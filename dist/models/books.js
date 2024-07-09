"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const con_1 = __importDefault(require("../con"));
const Book = con_1.default.define('Book', {
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
