class Person {
    constructor(name) {
        this.name = name;
    }

    introduce() {
        return `Nimeni on ${this.name}.`;
    }
}

class Student extends Person {
    constructor(name) {
        super(name);
        this.course = null;
    }

    study(course) {
        this.course = course;
    }

    introduce() {
        const opiskelen = this.course ? `Opiskelen ${this.course}.` : "Minä en opiskele vielä.";
        return `${super.introduce()} ${opiskelen}`;
    }
}

class Teacher extends Person {
    constructor(name) {
        super(name);
        this.subject = null;
    }

    teach(subject) {
        this.subject = subject;
    }

    introduce() {
        const opetan = this.subject ? `Opetan ${this.subject}.` : "Minä en opeta vielä mitään.";
        return `${super.introduce()} ${opetan}`;
    }
}

const student1 = new Student("Petri");
student1.study("kemiaa");
const student2 = new Student("Marja");
const teacher1 = new Teacher("Juusi");
const teacher2 = new Teacher("Kate");

console.log(student1.introduce());
console.log(student2.introduce());

console.log(teacher1.introduce());
teacher2.teach("matematiikkaa");
console.log(teacher2.introduce());