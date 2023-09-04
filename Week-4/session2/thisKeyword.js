class Person {
  constructor(name, age, gender, nationality) {
    this.Name = name;
    this.Age = age;
    this.Gender = gender;
    this.Nationality = nationality;
  }

  introduce() {
    return `My name is ${this.Name}, I am ${this.Age} years old, I am ${this.Gender}, and I am ${this.Nationality}`;
  }
}

class Student extends Person {
  constructor(name, age, gender, nationality, subject) {
    super(name, age, gender, nationality);
    this.Subject = subject;
  }

  study() {
    return `I am studying ${this.Subject}.`;
  }
}

/** person class */
const John = new Person("John", "25", "male", "American");
const Jane = new Person("Jane", "30", "female", "Canadian");
const Bob = new Person("Bob", "20", "male", "Australian");

console.log(John.introduce());
console.log(Jane.introduce());
console.log(Bob.introduce());

/** student class */
const Sarah = new Student(
  "Sarah",
  "18",
  "female",
  "British",
  "Computer Science"
);
console.log(Sarah.introduce());
console.log(Sarah.study());
