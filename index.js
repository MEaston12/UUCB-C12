require('dotenv').config();

const {buildTeam} = require('./handlers/input');
const {buildCards} = require('./handlers/templateHandler');

buildTeam()
    .then(buildCards)