const Sequelize = require('sequelize');

module.exports = function (sequelize) {
    return sequelize.define('quiz_answer_generator', {
        id : {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        identifier: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false
        },
        name: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false
        },
    },{
        timestamps: false,
        tableName: 'quiz_answer_generator'
    });
}