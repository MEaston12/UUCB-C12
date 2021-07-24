require('dotenv').config();
const sql = require('./handlers/sql');

//IIAFE
(async () => {
    await sql.init();
})();