
// const h1 = document.getElementsByTagName('h1')

// const h1 = document.getElementsByClassName('title-1')

const title = document.getElementById('title')

title.setAttribute('style', 'color:blue; background-color:red;')
title.setAttribute('title', 'test baslik')
title.setAttribute('class', 'Istanbul')

title.style.color = 'blue'
title.style.backgroundColor = 'red'
title.title = 'This is a title'
title.className = 'Istanbul'

title.classList.add('adana')
title.classList.remove('Istanbul')

//Düzyazı eklemek için textContent
title.textContent = 'Hello World'

//HTML eklemek için innerHTML
title.innerHTML = '<strong>Hello World</strong>'

document.querySelectorAll('h1').forEach((h1, index) => {

    if (index % 2 === 0) {
        h1.style.color = 'green'
        h1.style.fontSize = '20px'
    }
    else {
        h1.style.color = 'yellow'
    }
})

console.log(
    document.querySelectorAll('.title-1 + #title')

)

document.querySelectorAll('.title-1').forEach(item =>
    console.log(item)

);

// console.log(h1[0])
/*
let len = h1.length;

for (let i = 0; i < h1.length; i++) {
    console.log(h1[i]);
}
*/

