class Person {
    constructor(name, age) { // конструктор вызывается, при создании нового объекта 
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}


class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }

    getInfo() {
        console.log(`I am a student in grade ${this.grade}.`);
    }
}

const person1 = new Person("Alice", 30);
person1.greet(); // Hello, my name is Alice and I am 30 years old.

const student1 = new Student("Bob", 20, "A");
student1.greet();
student1.getInfo();