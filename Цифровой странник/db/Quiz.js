const Sequelize = require('sequelize');

module.exports = function (sequelize) {
    return sequelize.define('quiz', {
        id : {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        level: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        minlevel: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        name: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false
        },
    },{
        timestamps: false,
        tableName: 'quiz'
    });
}