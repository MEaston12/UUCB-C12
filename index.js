require('dotenv').config();
const db = require('./handlers/db');
const input = require('./handlers/input');
const cTable = require('console.table');

//IIAFE
(async () => {
    await db.init();
    //console.table((await db.role.viewAll())[0]);
    await input.run();
    console.log('Finished execution, exiting!');
    process.exit(1);
})();