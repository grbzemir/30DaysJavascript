ad = 'Tayfun'

a = 'JavaScript'
b = 10;

function letsLearnScope() {
    console.log(a, b)
    if (true) {
        console.log(a, b)
    }
}

console.log(a, b);


//Global Scope
let name = 'tayfun'
let surname = 'altan'

function letsLearnScope() {

    console.log(name, surname);

    if (true) {
        //Local Scope
        let name = 'emir';
        let surname = 'gürbüz';
        console.log(name, surname);
    }

    console.log(name, surname);
}

letsLearnScope();
console.log(name, surname);

const person =
{
    firstName: 'Emir',
    LastName: 'Gürbüz',
    age: 250,
    country: 'Turkey',
    city: 'Istanbul',
    isMarried: true,

    test:
    {
        deneme: 'Deneme text'
    },

    'phone number': '123456789',

    skills: [
        'HTML',
        'CSS',
        'JS',
        'React',
        'Node',
        'Python',
        'Django'

    ],


    siblings:
        [

            {
                name: 'Ali',
                age: 25,

            }
        ],

    getFullName: function () {
        return `${this.firstName} ${this.LastName}`

    }
}

// let keyName = 'age';

console.log(person);
console.log(person.LastName);
console.log(person.skills);

