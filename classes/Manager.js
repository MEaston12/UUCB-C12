const Employee = require("./Employee");

module.exports = class Manager extends Employee {
    constructor(id, name, email, officeNumber){
        super(id, name, email);
        this.officeNumber = officeNumber;
        this.icon = 'coffee';
    }
    getRole(){return "Manager"};
    getOfficeNumber(){return this.officeNumber};
    getSpecialValue(){return `Office Number: ${this.getOfficeNumber()}`};
}