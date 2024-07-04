"use strict";
// models/members.ts
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var database_1 = require("../database"); // Assuming 'database.ts' exports 'sequelize'
var Member = database_1.sequelize.define('Member', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: sequelize_1.DataTypes.STRING
    },
    phone_number: {
        type: sequelize_1.DataTypes.STRING
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        unique: true
    }
}, {
    tableName: 'members'
});
exports.default = Member;
