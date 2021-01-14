const Sequelize = require('sequelize');

module.exports = function (sequelize) {
    return sequelize.define('quiz_ag_instance', {
        id : {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        generator: {
            type: Sequelize.STRING,
            allowNull: false
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        setting: {
            type: Sequelize.STRING,
            allowNull: false
        },
    },{
        timestamps: false,
        tableName : 'quiz_ag_instance'
    });
}