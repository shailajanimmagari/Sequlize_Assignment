

import { Sequelize } from 'sequelize';

const sequelizeInstance = new Sequelize({
  dialect: 'postgres',
  database: 'postgres',
  username: 'shailaja',
  password: '1121',
  host: 'localhost',
  port: 5432,
  // other options
});

async function testConnection(): Promise<void> {
  try {
    await sequelizeInstance.authenticate();
    console.log('Connection has been established');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
testConnection();

async function syncModels(): Promise<void> {
  try {
    await sequelizeInstance.sync({ force: true }); 
    console.log('Database synchronized successfully');
  } catch (error) {
    console.error('Error syncing database:', error);
  }
}
syncModels();
export { sequelizeInstance, testConnection, syncModels };
