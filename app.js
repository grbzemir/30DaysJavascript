//primitive veri tipleri -Karşılaştırılabilir

let numOne = 3
let numTwo = 3

console.log(numOne == numTwo) // true

let js = 'JavaScript'
let py = 'Python'

console.log(js == py) // false

let lightOn = true
let lightOff = false

console.log(lightOn == lightOff) // false


let nums = [1, 'prototurk', 3]

// nums[0] // 1
// nums[1] // prototurk
// nums[2] // 3

console.log(nums);

nums[0] = 5;
console.log(nums);

//Dizileri fonksiyonları nesneleri karsılastırmayın

let nums1 = [1, 2, 3]
//let nums2 = [1, 2, 3]

let nums2 = nums1

console.log(nums1 == nums2) // false

let user1 = {

    name: 'emir',
    surname: 'gürbüz',

}

let user2 = {

    name: 'emir',
    surname: 'gürbüz',

}

console.log(user1 == user2) // false

