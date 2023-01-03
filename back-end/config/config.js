require('dotenv').config();

module.exports = {
    development: {
        username: 'freedb_rachidroot',
        password: 'n96r9Z@CSz2@#bW',
        database: 'freedb_cashforce',
        host: 'sql.freedb.tech',
        port: 3306,
        dialect: 'mysql',
        logging: true
    },
    test: {
        username: process.env.DB_USER,
        password: process.env.DB_PWD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: process.env.DB_DIALECT,
        logging: true
    },
    production: {
        username: process.env.DB_USER,
        password: process.env.DB_PWD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: process.env.DB_DIALECT
    }
};