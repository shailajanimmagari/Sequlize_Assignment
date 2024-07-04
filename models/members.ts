// models/members.ts

import { DataTypes } from 'sequelize';
import {sequelize} from '../database'; // Assuming 'database.ts' exports 'sequelize'

const Member = sequelize.define('Member', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING
    },
    phone_number: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING,
        unique: true
    }
}, {
    tableName: 'members'
});

export default Member;
