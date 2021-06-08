const Employee = require("./Employee");

module.exports = class Intern extends Employee{
    constructor (id,name, email, school){
        super(id,name,email);
        this.school = school;
        this.icon = 'baby';
    }
    getSchool = () => this.school;
    getRole(){return "Intern"};
    getSpecialValue(){return `School: ${this.getSchool()}`};
}