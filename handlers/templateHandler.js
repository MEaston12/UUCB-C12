const fs = require('fs');

const templateCard = fs.readFileSync('./refs/templateCard.html','utf-8');
const templatePage = fs.readFileSync('./refs/templatePage.html','utf-8');

module.exports = {
    buildCards(team){
        return [team.manager,...team.engineers,...team.interns].map(employee => {
            return templateCard
                .replace('{name}', employee.getName())
                .replace('{id}', employee.getId())
                .replace('{email}', employee.getEmail())
                .replace('{email}', employee.getEmail())
                .replace('{role}', employee.getRole())
                .replace('{specialValue}', employee.getSpecialValue())
                .replace('{icon}', employee.getIcon())
        });
    },
    buildPage(cards){
        return templatePage.replace('{cards}',cards.join("\n"));
    }
}
