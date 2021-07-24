const mysql = require('mysql2/promise');
const fs = require('fs').promises;

class DB { //Classes are more fun
    constructor(){
        this.connection = {};
    }
    async init(){
        this.connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            database: 'uucb_c12',
            password: ''
        });
        console.log('Connected to database!');
        const schema = await fs.readFile('./queries/schema.sql', 'utf-8');
        await mysql.execute(schema);
        console.log('Schema loaded!');
    }
}

const db = new DB();
module.exports = db;