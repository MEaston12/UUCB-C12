const mysql = require('mysql2/promise');
const fs = require('fs').promises;

class DB { //Classes are more fun
    constructor(){
        this.connection = {};
    }
    async query(queryStr){
        return await this.connection.query(queryStr);
    }
    async init(){
        this.connection = await mysql.createConnection({
            multipleStatements: true,
            host: process.env.HOST,
            user: process.env.USER,
            database: process.env.DATABASE,
            password: process.env.PASSWORD
        });
        console.log('Connected to database!');
        const schema = await fs.readFile('./queries/schema.sql', 'utf-8');
        await this.query(schema);
        console.log('Schema loaded!');
    }
}

const db = new DB();
module.exports = db;