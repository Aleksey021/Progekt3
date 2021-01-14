const http = require('http');
const fs = require('fs');
const path = require('path');

const db = require('./db');
const User = db.user;
const Quiz = db.quiz;
const Quiz_ag_instance = db.quiz_ag_instanse;
const Quiz_answer_generator = db.quiz_answer_generator;
const Quiz_item = db.quiz_item;
const Score = db.score;
const Statistics = db.statistics;


const httpServer = http.createServer((req, res) => {
    console.log(`req: ${req.url}`);
    if (req.url === '/') {
        sendRes('site.html', 'text/html', res);
    } else if (req.url === '/save-form') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            console.log(body);
            writeToDb(body, res);
        })
    } else if (req.url === '/save-form2') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            console.log(body);
            selectToDb(body, res);
        })
    } else {
        sendRes(req.url, getContentType(req.url), res)
    }

}).listen(3000, () => {
    console.log('node.js port 3000');
});

function sendRes(url, contentType, res) {
    let file = path.join(__dirname + '/src/', url);
    fs.readFile(file, (err, content) => {
        if (err) {
            res.writeHead(404);
            res.write('file not found');
            res.end();
            console.log(`error 404 ${file}`)
        } else {
            res.writeHead(200, {'Content-Type': contentType});
            res.write(content);
            res.end();
            console.log(`res 200 ${file}`)
        }
    })
}

function getContentType(url) {
    switch (path.extname(url)) {
        case ".html":
            return "text/html";
        case ".css":
            return "text/css";
        case ".js":
            return "text/javascript";
        case ".json":
            return "application/json";
        default:
            return "application/octate-stream"
    }
}


function writeToDb(data, res) {
    data = JSON.parse(data, true);
    console.log(data);
    User.create({
        email: data['input-1'],
        password: data['input-2'],
        name: data['input-0'],
    })
        .then(result => {
            console.log(result);
            res.end('ok');
        }).catch(err => {
        console.log(err);
        res.end('error');
    })
}

function selectToDb(data, res) {
    data = JSON.parse(data, true);
    console.log(data);
    User.findOne({
        where: {
            name: data['input-0'],
            password: data['input-1']
        }
    }).then(result => {
        if (result != null) {
            console.log(result);
            res.end('ok');
        } else {
            console.log("User is not found");
            res.end('User is not found')
        }
    }).catch(err => {
        console.log(err);
        res.end('error');
    })

}

