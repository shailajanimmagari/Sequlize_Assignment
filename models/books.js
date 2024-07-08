"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var con_1 = require("../con");
var Book = con_1.default.define('Book', {
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
