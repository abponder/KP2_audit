import config from './../config/config'
import app from './express'
import sequelize from 'sequelize'
import db from './models'



db.sequelize.sync().then(function () {
    console.log('sequelize is working');
  const server = app.listen(config.port, function(){
    console.info('Server started on port ', config.port);
  });
});