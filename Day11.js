// Destructuring, -> şeklini bozma isimlendirme
// Spread,  -> dağılma yayma
// Rest -> kalan


const numbers = [10, 12, 14]

const [number1, numbers2] = numbers;

console.log(numbers[0]); //10
console.log(number1); //10

console.log(numbers[1]); //12
console.log(numbers2); //12

console.log(numbers[2]);

const stack = [
    ['HTML', 'CSS', 'JS'],
    ['React', 'Node']

]

// const [frontEnd, backEnd] = stack;
const [firstLanguage, backEnd] = stack;
// console.log(frontEnd);
console.log(firstLanguage);


const names = [undefined, 'Brook', 'David'];

let = [

    firstPerson = 'Emir',
    secondPerson,
    thirdPerson,
    fourthPerson,

] = names;

console.log(firstPerson, secondPerson, thirdPerson, fourthPerson);

const names1 = ['tayfun', 'zerafet', 'ahmet', 'hakan', 'mehmet']

const [myName, MyWifeName, myFriendName, otherNames] = names1;

console.log(myName);
console.log(MyWifeName);
console.log(myFriendName);
console.log(otherNames);

// const countries = [
//     ['Finland', 'Helsinki'],
//     ['Sweden', 'Stockholm'],
//     ['Norway', 'Oslo']
//     ['Denmark', 'Copenhagen'],
//     ['Iceland', 'Reykjavik']
// ]

// for (const [country, capital] of countries) {
//     console.log(`Ülke: ${country} - Başkent: ${capital}`)
// }

const user = {

    name: 'Emir',
    surname: 'Gürbüz',
    age: 25,
    country: 'Turkey',
    title: 'Software Developer',
    pets: {
        cat: 'Tom',
        dog: 'Charlie'
    }
}

const { surname: soyad } = user;
console.log(soyad);

// function multiply(num1, num2) {
//     return num1 * num2;
// }

// console.log(multiply(2, 3));

function multiply(numbers) {
    return numbers[0] * numbers[1];
}

console.log(multiply([10, 21]));

// const user1 = {

//     name: 'Emir',
//     surname: 'Gürbüz',
//     age: 25,
//     country: 'Turkey',
//     title: 'Software Developer',
//     pets: {
//         cat: ['Tom'],
//         dog: ['Charlie']
//     },
//     skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python', 'Django'],
//     hobbies: ['Music', 'Football', 'Reading']
// }

// function showUserInfo({ name, surname, age, country, title, pets: { cat, dog }, skills: [first, second, third, fourth, fifth, sixth, seventh], hobbies: [hobby1, hobby2, hobby3] }) {

//     return `Name: ${name}, Surname: ${surname}, Age: ${age}, Country: ${country}, Title: ${title}, Pets: ${cat} and ${dog}, Skills: ${first}, ${second}, ${third}, ${fourth}, ${fifth}, ${sixth}, ${seventh}, Hobbies: ${hobby1}, ${hobby2}, ${hobby3}`

// }

// console.log(showUserInfo(user))

const numbers1 = [1, 2, 3]

const numbers3 = numbers1

console.log(numbers1);
numbers3.push(10);
console.log(numbers3);




