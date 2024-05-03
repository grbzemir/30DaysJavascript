
class Person {

    constructor(firstName, lastName, age, country = 'Turkey') {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.country = country;
        this.skikls = [];
        this.score = 0;

    }



    getFullName() {

        return this.firstName + ' ' + this.lastName;
        return fullName;

    }

    get getScore() {
        return this.score;
    }

    set setScore(score) {
        this.score = score;
    }

    // skilleri getirme işlemi yapıldı
    get getSkills() {
        return this.skills;
    }

    // skilleri set etme işlemi yapıldı düzenleme veya ekleme
    set setSkills(skills) {
        this.skills = skills;
    }

    getPersonelInfo() {
        let fullName = this.getFullName();
        let skills = this.skills.length > 0 ? this.skills : 'Henüz bir skill eklenmemiş';
        return `${fullName} is ${this.age} years old. He/She is from ${this.country} and has skills: ${skills}`;
    }

    static adana() {
        return 'adana!';
    }

    static getTimestmap() {
        return Date.now();

    }

}
const person1 = new Person('Emir', 'Gürbüz', 25, 'Turkey')
const person2 = new Person('Can Tekin', 'Tekin', 25, 'undefined')
const person3 = new Person('Eren Efe', 'Yildiz', 25, 'Turkey')

person1.setSkills = ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python', 'Django']
person2.setSkills = ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python', 'Django']
person3.setSkills = ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python', 'Django']

// console.log(person1.getFullName());
// console.log(person2.getFullName());
// console.log(person3.getFullName());
// console.log(person1.getSkills);
// console.log(person2.getSkills);
// console.log(person3.getSkills);

console.log(person1.getPersonelInfo());
console.log(person2.getPersonelInfo());
console.log(person3.getPersonelInfo());

console.log(Person.adana());
console.log(Person.getTimestmap());


class Teacher extends Person {
    //Ogretir
    //supper  üst sınıfının bir nesnesini yaratabilir ve onun değişkenlerine değer atayabilir
    constructor(firstName, lastName, age, country, subject) {
        super(firstName, lastName, age, country)
        this.gender = gender;
    }
    teach() {
        return 'matematik öğretiyorum';
    }

    getFullName() {

        return super.getFullName() + '(' + this.getGender + ')'
    }

    get getGender() {
        return this.gender === 1 ? 'Erkek' : 'Kadin';
    }
}

class Student extends Person {
    //Öğrenci
    learn() {
        return 'ders çalisiyorum';
    }
}


const person6 = new Person('Emir', 'Gürbüz', 25, 'Turkey', 1)
const teacher1 = new Teacher('Ahmet', 'Korkut', 25, 'Turkey', 1)
const student1 = new Student('Tayfun', 'Korkut', 25, 'Turkey', 2)


console.log(teacher1.getGender);
console.log(student1.learn);