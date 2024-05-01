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

topla(2, 3, 4, 5, 6);