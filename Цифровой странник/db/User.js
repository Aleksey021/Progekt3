const Sequelize = require('sequelize');

module.exports = function (sequelize) {
    return sequelize.define('user', {
        id : {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false
        },
        password: {
            type: Sequelize.CHAR,
            allowNull: false
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        status_char: {
            type: Sequelize.STRING,
        },
        photo: {
            type: Sequelize.STRING,
        }
    },{
        timestamps: false,
        tableName: 'user'
    });
}