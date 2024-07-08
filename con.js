"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var sequelize = new sequelize_1.Sequelize({
    dialect: 'postgres',
    database: 'postgres',
    username: 'shailaja',
    password: '1121',
    host: 'localhost',
    port: 5432,
    // other options
});
exports.default = sequelize;
