// Code: 1 high order Yüksek mertebre fonksiyonları

const fonksiyon = number => number ** 2

function cube(callback, number) {
    return callback(number) * number;

}

//console.log(cube(fonksiyon, 3))

//High order fonksiyonlar geriye fonksiyon dönderebilirler

const a = s1 => {

    const b = s2 => {

        const c = s3 => {

            return s1 + s2 + s3;

        }

        return c;

    }

    return b;


}

console.log(a(5)(10)(20))

/*
const numbers = [1, 3, 5, 7, 9]

console.log(numbers.find(number => number > 3))

//reduce metodu - tek bir metoda indirmek amacıyla kullanılır

numbers.reduce((oldValue, currentValue) => {

    return oldValue + currentValue;
}, 0)

*/


// let total = 0;
// let calculate = (number, index) => total += (number + index);
// numbers.forEach(calculate);
//console.log(total);

let users = [
    {
        id: 2,
        name: 'John',
        surname: 'Doe',
        age: 25,
        gender: 1
    },
    {
        id: 1,
        name: 'Jane',
        surname: 'Doe',
        age: 22,
        gender: 1
    },

    {
        id: 7,
        name: 'Jack',
        surname: 'Doe',
        age: 30,
        gender: 2
    }

]

users.sort((a, b) => b.id - b.id);
console.log(users);

const currentUser = users.find(user => user.id === 2);
console.log(currentUser)

//Every metodu herbiri manasına gelir 
users.every(user => user.gender === 1);

users = users.map(user => {

    if (user.id === 2) {

        user.name = 'Hakan'

    }
    return user;
})

numbers.filter(number => number > 2 && number < 10);

const women = users.filter(user => user.gender === 2);
const men = user.filter(user => user.gender === 1 && user.age > 24);

console.log(men)





//map() metodu, dizi içerisindeki tüm elemanları bir işlemden geçirmek için kullanılır
// const numbers2 = numbers.map(number => number * 2);
// console.log(numbers2);

function sayHello() {
    console.log('Hello');

}

const interval = (sayHello, 1000);
//clearTimeout(1);
//clearInterval(1);

setTimeout(() => {

    clearInterval(interval);
    console.log('interval is cleared');

}, 3000)


setTimeout(() => {

    clearTimeout(timeout)
    console.log('timeout is cleared');

}, 3000)


const names = ['Ahmet', 'Mehmet', 'Gürbüz', 'Emir'];
const numaralar = [3, 1, 5, 2, 4, 10, 21, 13, 12];
names.sort((a, b) => b.localeCompare(a))
numaralar.sort((a, b) => b - a);

console.log(names);
console.log(numaralar);

