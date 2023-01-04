require('dotenv').config();

module.exports = {
    development: {
        username: 'root',
        password: 'root',
        database: 'cashforce',
        host: 'localhost',
        port: 3306,
        dialect: 'mysql',
        logging: true
    },
    test: {
        username: 'root',
        password: 'root',
        database: 'cashforce',
        host: 'localhost',
        port: 3306,
        dialect: 'mysql',
        logging: true
    },
    production: {
        username: 'root',
        password: 'root',
        database: 'cashforce',
        host: 'localhost',
        port: 3306,
        dialect: 'mysql',
    }
};