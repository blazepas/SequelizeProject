const fs = require('fs');

// exports NODE_ENV = development;

module.exports = {
  development: {
    username: 'postgres',
    password: 'postgres',
    database: 'postgres',
    host: '127.0.0.1',
    port: 5000,
    dialect: 'postgres',
    dialectOptions: {
      bigNumberStrings: true
    };
  };
};
