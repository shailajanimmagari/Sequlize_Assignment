"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var database_1 = require("../database");
var Author = database_1.sequelizeInstance.define('Author', {
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
        type: sequelize_1.DataTypes.INTEGER
    },
    nationality: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    tableName: 'authors'
});
exports.default = Author;
