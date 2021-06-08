const fs = require('fs').promises;
const outPath = './out/myTeam.html';

module.exports = {
    async saveHTML(htmlPage){
        await fs.writeFile(outPath,htmlPage);
        console.log('Wrote file to ' + outPath);
    }
}