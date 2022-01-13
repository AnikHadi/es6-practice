class Parent{
    constructor(){
        this.fatherName = "Schwarzenegger"
    }
}

class Child extends Parent{
    constructor(name) {
        super();
        this.name = name;
    }
    getFullName() {
        return this.name + " " + this.fatherName;
    }
}

const baby1 = new Child("Tom")
const baby2 = new Child("Kim");

console.log(baby1);
console.log(baby2);

// get full name
console.log(baby1.getFullName());
console.log(baby2.getFullName());