// let msg = 'merhaba dünya!'

// function sayHello() {

//     let msg = 'Hello World!'
//     return msg
// }

// sayHello();

function printFullName() {
    let firstName = 'Asabeneh';
    let lastName = 'Yetayeh';
    let space = ' ';
    let fullName = firstName + space + lastName;
    return fullName;
}

console.log(printFullName());

function multiply(num1, num2) {
    let total = num1 * num2;
    return total;
}

let total = multiply(2, 3);
console.log('Toplam', total);


function sumArrayValues(array) {
    let total = 0;
    let dizi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    sumArrayValues(dizi);

    console.log('Toplam', total);
}


function topla() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }

    return total;
}

console.log(topla(2, 3, 4, 5, 6));

const sayHello = function (name) {
    return `Hello, ${name}`;

}

console.log(sayHello('Asabeneh'));


//Normal function

function Hello(name) {

    return `Hello, ${name}`;

}



// Arrow Function

const hello2 = name => `Hello, ${name}`;

console.log(hello2('Emir'));



const toplama = (num1, ...numbers) => {

    console.log(num1)
    console.log(numbers)


}

toplama(2, 5, 7, 8, 10)

console.log(hello2('Emir', 'Altan'));


function multiply(num1, num2 = 6) {
    return num1 * num2;

}

console.log(multiply(10));


function test() {
    console.log('Merhaba');

}

//call
test()

function invoker(func) {

}

//invoke
invoker(test);


