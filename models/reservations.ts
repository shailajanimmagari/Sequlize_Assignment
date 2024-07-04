// models/reservations.ts

import { DataTypes } from 'sequelize';
import {sequelize} from '../database'; // Assuming 'database.ts' exports 'sequelize'

const Reservation = sequelize.define('Reservation', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    book_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'books',
            key: 'id'
        }
    },
    member_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'members',
            key: 'id'
        }
    },
    reservation_date: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    tableName: 'reservations'
});

export default Reservation;
