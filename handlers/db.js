const mysql = require('mysql2/promise');
const fs = require('fs').promises;

async function bootstrap(db){
    //This is way too complicated but it's also fun
    //  It programmatically searches the queries folder and implements each .sql file it finds
    //  as a function call on an object.
    const queriesFolder = await fs.readdir('./queries', {withFileTypes:true});
    for(const dirEnt of queriesFolder){
        if(dirEnt.isDirectory()) {
            db[dirEnt.name] = {};
            for(const queryFile of await fs.readdir(`./queries/${dirEnt.name}`)){
                const queryName = queryFile.split('.')[0];
                const query = await fs.readFile(`./queries/${dirEnt.name}/${queryFile}`, 'utf-8');
                db[dirEnt.name][queryName] = args => db.query(query, args);
                console.log(`Loaded db.${dirEnt.name}.${queryName}(args)`)
            }
        }
    }
}

class DB { //Classes are more fun
    constructor(){
        this.connection = {};
        this.department = {};
        this.employee = {};
        this.role = {};
    }
    async query(queryStr, args){
        return await this.connection.query(queryStr, args);
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
        await bootstrap(this);
        console.log('Bootstrapping finished!')
    }
}

const db = new DB();
module.exports = db;