const inq = require('inquirer');
const mysql = require('mysql2');

require('dotenv').config();

const {buildTeam} = require('./handlers/inputHandler');
const {saveHTML} = require('./handlers/outputHandler');
const {buildCards} = require('./handlers/templateHandler');

buildTeam()
    .then(buildCards)