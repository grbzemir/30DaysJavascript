
// set her veri tipinde değer tutabilir
//benzersiz değerleri tutan bir JavaScript nesnesidir.
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



