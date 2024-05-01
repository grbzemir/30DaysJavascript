
//Set her veri tipinde değer tutabilir
//Benzersiz değerleri tutan bir JavaScript nesnesidir.
// const names = ['tayfun', 'ahmet', 'mehmet'];
// const namesSet = new Set();


// for (let name of names) {
//     namesSet.add(name);
// }

// namesSet.add('Emir');
// namesSet.add(15);


// console.log(
//     nameSet.has('ahmet')
// );

// namesSet.delete('ahmet');
// namesSet.clear();

// console.log(
//     namesSet.has('size')
// );




const languages =
    [
        'Turkish',
        'English',
        'German',
        'French',
        'Spanish',
        'Italian',
        'Portuguese',
        'Russian',

    ]

const langSet = new Set(languages)
console.log(langSet) // Set(4) { 'tr', 'en', 'de', 'fr' }
console.log(langSet.size) // 4

const counts = []; //dizi
const count = {}; //nesne obje


for (let lang of langSet) {

    const filteredLang = languages.filter(lng => lng === lang);
    counts.push(
        {
            language: lang,
            count: filteredLang.length

        })

}

console.log(counts);


// const a = [1, 2, 3, 4, 5];
// const b = [3, 4, 5, 6, 7];

// const c = [...a, ...b];

// let A = new Set(a);
// let B = new Set(b);
// let C = new Set(c);

// console.log(C);


// const d = [1, 2, 3, 4, 5];
// const e = [3, 4, 5, 6, 7];

// const G = new Set(G);
// const F = new Set(a.filter(num => B.has(num)));
// console.log(F);


// const a = [1, 2, 3, 4, 5];
// const b = [3, 4, 5, 6];

// let A = new Set(a);
// let B = new Set(B);
// console.log(
//     a.filter(num => !B.has(num))
// )
