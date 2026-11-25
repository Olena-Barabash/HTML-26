class Student {
    #points = 0;

    constructor(name, points) {
        this.name = name;
        this.#points = points < 0 ? 0 : points;

        this.aktiivisus = true;
    }

    addPoints(amount) {
        this.#points += amount;
    }

    greet() {
        console.log(`Hei ${this.name}!`);
    }

    get grade() {
        return this.#points >= 75 ? "Hyväksytty" : "Hylätty";
    }
}

const student1 = new Student("Petri", 50);
const student2 = new Student("Marja", 78);
const student3 = new Student("Juusi", 90);

student1.greet();
console.log(`Grade: ${student1.grade}`);
student2.greet();
console.log(`Grade: ${student2.grade}`);
student3.greet();
console.log(`Grade: ${student3.grade}`);