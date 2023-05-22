module.exports = {
    test: {
        username: 'postgres',
        password: '123456',
        database: 'ths_dev',
        host: 'localhost',
        dialect: 'postgres',
        port: 5432,
        logging: false,
        dialectOptions: {
            "ssl": false,
            "useUTC": false,
        }
    },
}