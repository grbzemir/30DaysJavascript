//Console Metodları

let age = 25;
console.log(age);


console.log('30 Days of JavaScript')

console.log(['tayfun', 'altan', 'prototurk']);

console.log(
    {
        name: 'tayfun',
        age: 25,
        country: 'Turkey'
    }
)

console.log('%cDur!', 'font-size: 50px; color: red; font-weight: bold; background-color: rgb; text-transform: uppercase; padding: 10px; border-radius: 5px;')

console.warn('Bu bir uyaridir!');

console.error('Bu bir hatadir!');

let names = ['eren', 'can tekin', 'emir'];

console.table(names);

console.time('calculate 1m array');
console.log(new Array(10e5).fill().map((value, index) => index));
console.timeEnd('calculate 1m array');


let a = 5;
let b = 6;

console.assert(a > b, 'a b den büyük değil!');

const names1 = ['Emir', 'CanTekin', 'Eren', 'Doğukan']
const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
]
const user = {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
}
const users = [
    {
        name: 'Asabeneh',
        title: 'Programmer',
        country: 'Finland',
        city: 'Helsinki',
        age: 250
    },
    {
        name: 'Eyob',
        title: 'Teacher',
        country: 'Sweden',
        city: 'London',
        age: 25
    },
    {
        name: 'Asab',
        title: 'Instructor',
        country: 'Norway',
        city: 'Oslo',
        age: 22
    },
    {
        name: 'Matias',
        title: 'Developer',
        country: 'Denmark',
        city: 'Copenhagen',
        age: 28
    }
]

console.group('Names')
console.log(names1)
console.groupEnd()

console.group('Countries')
console.log(countries)
console.groupEnd()

console.group('Users')
console.log(user)
console.log(users)
console.groupEnd()


const test = () => {
    console.count('test called')

}
/*Bir işlemin kaç kez yürütüldüğünü, kaç kez döngü içinde çalıştığını bilmek isteyebiliriz.*/
test();
test();
test();