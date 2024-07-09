"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const con_1 = __importDefault(require("../con"));
const Author = con_1.default.define('Author', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    birth_year: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    nationality: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    tableName: 'authors',
    timestamps: false // If you don't want createdAt and updatedAt fields
});
exports.default = Author;
