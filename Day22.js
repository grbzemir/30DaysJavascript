
// let h1 = document.createElement('h1')

// h1.className = 'test'
// h1.style.backgroundColor = 'blue'
// h1.textContent = 'JavaScript ile Eklendi'

for (let i = 1; i <= 10; i++) {
    let h1 = document.createElement('h1');
    h1.className = 'test';
    h1.style.backgroundColor = 'blue';
    h1.style.color = '#fff';
    h1.textContent = 'JavaScript ile Eklendi';
    document.body.append(h1); // Varolan içeriğin sonrasına ekler
    document.body.prepend(h1); // Varolan içeriğin başına ekler
}

// <h1> öğeleri görüntülendikten sonra kaldır
const allH1Elements = document.querySelectorAll('h1');
for (const h1 of allH1Elements) {
    h1.remove();
}