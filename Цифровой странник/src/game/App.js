const mysql = require('mysql2/promise');
const config = require('./config');


async function main(){
    const conn = await mysql.createConnection(config);
    const [rows, fields] = await conn.execute('SELECT * FROM project2.quiz_item WHERE `id` < 101 ORDER BY RAND() LIMIT 1');
    let answer = rows[0]['answer'];
    let question = rows[0]['question'];
    conn.end();
}

main();


