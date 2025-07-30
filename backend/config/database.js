const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('planova', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
});

module.exports = sequelize;