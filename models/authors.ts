// models/authors.ts

import { DataTypes } from 'sequelize';
import {sequelize} from '../database'; // Assuming 'database.ts' exports 'sequelize'

const Author = sequelize.define('Author', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    birth_year: {
        type: DataTypes.INTEGER
    },
    nationality: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'authors'
});

export default Author;
