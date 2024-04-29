
let names = Array(5)

console.log(names)

let names2 = ['Tayfun', 28, 1993, 'emir']
names2[0] = 'Emir'

console.log(names2)

console.log('tayfun'.split(''))

console.log('tayfun'.length)

let array1 = ['1', '2', '3']
let array2 = ['4', '5', '6']
let array3 = ['7', '8', '9']

let result = array1.concat(array2, array3, 10, 11, 12)

console.log(result)

let names1 = ['Tayfun', 'Emir', 'Gürbüz']

console.log(names1.join(' '))

names.push(
    {
        name: 'Tayfur',
    }
)
let names3 = 'tayfun'.split('')

console.log(Array.isArray(names2))

console.log(names1.indexOf('Emir'))
console.log(names1.includes('Emir'))
console.log(names1.includes('emir'))

console.log(names.toString())

console.log(names.slice(1, 3))
console.log(names.splice(0, 2))

console.log(names)

const numbers = [4, 10, 1, 3, 7, 2]
console.log(numbers)

numbers.sort()
console.log(numbers)