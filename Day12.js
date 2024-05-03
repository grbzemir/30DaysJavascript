// let word = /emir/i
// // let comment = 'emir çok yakisikli bir çocuk'
// let comment = prompt("Yorumunu gir");

// if (word.test(comment)) {
//     console.log('Yorumda emir kelimesi geçiyor')
// }


let string = 'I      Love JavaScript'
// let pattern = /love/i

console.log(string.search(/love/i))

const txt = 'I love JavaScript. If you do not love JavaScript what else can you love.'

let matchReplaced = txt.replace(/JavaScript/gi, 'python')
console.log(matchReplaced)


// i	Küçük büyük harf duyarsız arama yapar.
// g	Metin veri türü içerisinde aranan tüm kelimeler üzerinde işlem yapar.
// m	Çok satırlı arama yapar.

// Meta karakter	Açıklama
// \d	Sayıları bul
// \s	Boşluk karakterini bul
// \b	Kelimenin başında veya sonunda bul
// \uxxxx	Onaltılık sayı xxxx ile belirtilen Unicode karakterini bul
// Niceleyiciler arama niceliğini belirtir.

// Nicelik	Açıklama
// n + En az bir n içeren herhangi bir kelime bul.
//     n * Sıfır veya daha fazla n içeren herhangi bir kelime bul.
//         n ? Sıfır veya bir kez n‘yi içeren herhangi bir kelime bul.


