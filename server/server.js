import config from './../config/config'
import app from './express'
import sequelize from 'sequelize'
import db from './server/models/'







db.sequelize.sync().then(function () {
    console.log('sequelize is working');
  const server = app.listen(PORT, function(){
    console.info('Server started on port ', config.port);
  });
});