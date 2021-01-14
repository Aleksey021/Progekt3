const Sequelize = require('sequelize');

module.exports = function (sequelize) {
    return sequelize.define('statistics', {
        id : {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        user: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        quiz: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        score: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        status: {
            type: Sequelize.CHAR,
            allowNull: false
        },
        started: {
            type: Sequelize.TIME,
            allowNull: false
        },
        finished: {
            type: Sequelize.TIME,
            allowNull: false
        }
    },{
        timestamps: false,
        tableName: 'statistics'
    });
}