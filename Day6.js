
for (let i = 1; i <= 5; i++) {

    console.log(i);
    //Back Type İle Kullanım 
    console.log(`${i} * ${i} = ${i * i}`)


}

const names = ['Ali', 'Veli', 'Deli', 'Mehmet', 'Ayşe', 'Fatma'];

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
}

let countries = ['USA', 'Germany', 'China', 'Russia', 'Turkey', 'France', 'United Kingdom', 'Canada', 'Japan'];

//Boş bir array
let newCountries = [];

for (let i = 0; i < countries.length; i++) {
    newCountries.push(countries[i].toUpperCase());
}

console.log(newCountries);

let i = 7;

while (i < names.length) {
    console.log('isim', names[i])
    i++;

}

do {

    Console.log('isim', names[i])
    i++;

} while (i < names.length)

//For of döngüsü

for (let name of names) {
    if (names == 'Veli') {
        console.log(`${name} is found`)
        break;
    }
    console.log(name);

}


/*Break*/
//Döngüyü sonlandırır
//Contiune da ise kaldığı yerden devam ettirir

for (let i = 0; i <= 5; i++) {
    if (i == 3) {
        break;

    }

    console.log(i);
}