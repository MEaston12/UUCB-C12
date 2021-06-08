module.exports = class Employee {
    constructor(id,name,email){
        this.id = id;
        this.name = name;
        this.email = email;
        this.icon = "";
    }
    
    getName(){return this.name}
    getId(){return this.id}
    getEmail(){return this.email}
    getRole(){return "Employee"}
    getIcon(){return this.icon}
    getSpecialValue(){}
}