import { Sequelize } from 'sequelize';
const sequelize = new Sequelize({
    dialect: 'postgres',
    database: 'postgres',
    username: 'shailaja',
    password: '1121',
    host: 'localhost',
    port: 5432,
    // other options
  });

  export default sequelize;