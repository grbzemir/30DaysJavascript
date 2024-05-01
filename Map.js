

// const map1 = new Map();

// map.set('name', 'Ahmet');
// map.set(1, 'One');

// console.log(map);


// const obj = {}

// obj['name'] = 'Ahmet';
// obj[1] = 'One';
// obj[true] = 'hello';

// console.log(
//     Object.keys(obj)
// )


const tayfun = {
    name: 'Tayfun',
    surname: 'Korkut',
    age: 25,
}

const ahmet = {
    name: 'Ahmet',
    surname: 'Korkut',
    age: 25,
}

const map = new Map()
map.set(tayfun, 10)
    .set(ahmet, 20)

console.log(
    // map.get(tayfun)
    map.keys()
    // map.values()
)



