const Employee = require("./Employee");

module.exports = class Engineer extends Employee {
    constructor(id, name, email, github){
        super(id,name,email);
        this.github = github;
        this.icon = 'pencil-ruler';
    }
    getGithub(){return this.github};
    getRole(){return "Engineer"};
    getSpecialValue(){return `Github: <a href="https://github.com/${this.getGithub()}">${this.getGithub()}</a>`};
}