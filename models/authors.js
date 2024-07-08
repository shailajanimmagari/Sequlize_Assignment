"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var con_1 = require("../con");
var Author = con_1.default.define('Author', {
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
