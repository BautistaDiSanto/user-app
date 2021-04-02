const {Model,DataTypes } = require('sequelize');

const sequelize = require('../database/connection.js');

class Users extends Model {}

Users.init({
  // Model attributes are defined here
  id : {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
  }
}, {
  sequelize, // We need to pass the connection instance
  modelName: 'User' // We need to choose the model name
});
Users.sync({force: true})
module.exports = Users;