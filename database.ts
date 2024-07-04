

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
 async function testConnection(){
    try{
        await sequelize.authenticate();
      console.log('Connection has been established');
   }catch (error){
        console.error('Connection not done yet');
    }
 }
 testConnection();

  async function syncModels() {
    try {
        await sequelize.sync({ force: true }); // Use force: true cautiously in development
       console.log('Database synchronized successfully');
    } catch (error) {
        console.error('Error syncing database:', error);
     }
 }

 syncModels();

export { sequelize };
