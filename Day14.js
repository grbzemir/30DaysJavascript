// Description: Error Handling
try {


    let firstName = 'emir';
    let lastName = 'gürbüz';

    fullName = firstName + '' + lastName
    throw new Error('Hata oluştu!');

}

catch (error) {

    console.log(error.name);
    console.table(error);

}

console.log('fullName');


let age = prompt('Kac Yasindasiniz?');

try {

    if (age > 29)
        throw new Error('Yaşiniz 29 dan büyük olamaz!');
}

catch (e) {

    alert('Yasiniz hakkinda girdiniz bilgiler doğru değil!');

}


//Referans Error
let FirstName = 'Emir';
let LastName = 'Gürbüz';

let fullName = FirstName + ' ' + surname;

//SyntaxError


console.log(firstName.toFixedUpperCase());