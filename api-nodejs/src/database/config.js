module.exports = {
    username: 'user',
    password: '123456',
    database: 'baseDespensa',
    host: '127.0.0.1',
    dialect: 'mysql',
    port: 3306,
    define:{
        timestamps: true,
    },
    dialectOptions: {
        connectTimeout: 60000
    }
};
