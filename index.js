require('dotenv').config();
const db = require('./handlers/db');
const input = require('./handlers/input');
const cTable = require('console.table');

//IIAFE
(async () => {
    await db.init();
    await input.run();
})();