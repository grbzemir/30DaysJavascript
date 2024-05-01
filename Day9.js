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


const numbers = [1, 3, 5, 7, 9]
let total = 0;
let calculate = (number, index) => total = total + number;
numbers.forEach(calculate);
//console.log(total);
//map() metodu, dizi içerisindeki tüm elemanları bir işlemden geçirmek için kullanılır
const numbers2 = numbers.map(number => number * 2);
console.log(numbers2);

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

