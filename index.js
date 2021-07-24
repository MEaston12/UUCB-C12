require('dotenv').config();
const db = require('./handlers/db');

//IIAFE
(async () => {
    await db.init();
    await db.department.add({name:'Finances'});
    console.log(await db.department.viewAll());
})();