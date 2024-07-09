"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize({
    dialect: 'postgres',
    database: 'postgres',
    username: 'shailaja',
    password: '1121',
    host: 'localhost',
    port: 5432,
    // other options
});
exports.default = sequelize;
