require('dotenv').config();
const db = require('./handlers/db');

//IIAFE
(async () => {
    await db.init();

})();