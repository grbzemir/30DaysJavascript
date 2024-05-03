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

