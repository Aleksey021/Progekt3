const Sequelize = require('sequelize');

module.exports = function (sequelize) {
    return sequelize.define('quiz_item', {
        id : {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        quiz: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        question: {
            type: Sequelize.STRING,
            allowNull: false
        },
        score: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        answer: {
            type: Sequelize.STRING,
            allowNull: false
        },
        ag_instanse: {
            type: Sequelize.STRING,
            allowNull: false
        }
    },{
        timestamps: false,
        tableName: 'quiz_item'
    });
}