

let isRaining = true

if (isRaining) {
    console.log('Şemsiyeni al')
}

else {

    console.log('Şemsiyeni alma')
}


let num = 3;

if (num > 0) {
    console.log('Pozitif')
}

else if (num < 0) {

    console.log('Negatif')
}


let result = prompt('2+5 kaç yapar?', '2+5')

if (result == 7) {

    console.log('Doğru')

}

else {

    console.log('Yanliş')
}

switch (result) {

    case 7:
        console.log('Doğru')
        break;
    default:
        console.log('Yanliş')
}


// let weather = 'rainy'

// switch (weather) {

//     case 'rainy':
//         console.log('Yağmurlu')
//         break;
//     case 'sunny':
//         console.log('Güneşli')
//         break;
//     case 'snowy':
//         console.log('Karli')
//         break;
//     default:
//         console.log('Hava durumu bilinmiyor')
// }


let myAge = 28;
let yourAge = parseInt(prompt('Yaşinizi giriniz', ""));

if (yourAge == myAge) {
    alert('Yaşlarimiz eşit')
}

else if (yourAge > myAge) {
    alert('Sen daha büyüksün')
}

else {

    alert('Ben daha büyüğüm')
}

