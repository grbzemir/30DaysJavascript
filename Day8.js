ad = 'Tayfun'

a = 'JavaScript'
b = 10;

function letsLearnScope() {
    console.log(a, b)
    if (true) {
        console.log(a, b)
    }
}

console.log(a, b);


//Global Scope
let name = 'tayfun'
let surname = 'altan'

function letsLearnScope() {

    console.log(name, surname);

    if (true) {
        //Local Scope
        let name = 'emir';
        let surname = 'gürbüz';
        console.log(name, surname);
    }

    console.log(name, surname);
}

letsLearnScope();
console.log(name, surname);
