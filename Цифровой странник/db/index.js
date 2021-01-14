const Sequelize = require('sequelize');

const sequelize =new Sequelize('project2', 'root', 'skeuSnfg48bN-httr', {
    dialect: "mysql",
    host: "localhost"
});

const User = require('./User')(sequelize);
const Quiz = require('./Quiz')(sequelize);
const Quiz_ag_instance = require('./Quiz_ag_instance')(sequelize);
const Quiz_answer_generator = require('./Quiz_answer_generator')(sequelize);
const Quiz_item = require('./Quiz_item')(sequelize);
const Score = require('./Score')(sequelize);
const Statistics = require('./Statistics')(sequelize);

module.exports = {
    sequelize: sequelize,
    user: User,
    quiz: Quiz,
    quiz_ag_instanse: Quiz_ag_instance,
    quiz_answer_generator: Quiz_answer_generator ,
    quiz_item: Quiz_item,
    score: Score,
    statistics: Statistics,
}