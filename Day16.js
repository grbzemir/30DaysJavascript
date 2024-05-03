//json farklı dillerin birbirleriyle iletişme geçmesi için bir yapı

let sampleJSON = ` [
    {
        "name": "Emir",
        "surname": "Kaya"
    },

    {
        "name": "Ali",
        "surname": "Veli"
    },

    {

        "name": "Ayşe",
        "surname": "Fatma"
    }
e
]`

try {
    let users = JSON.parse(sampleJSON, (key, value) => {

        return key === 'name' ? 'Mr. ' + value : value;
        // console.log('KEY', key);
        // console.log('VALUE', value);

    })

    console.log(users);

}
catch (error) {
    console.log(error);
}




// //objecten jsona ise stringify ile çeviriyoruz

let categories = [

    {
        name: 'JavaScript',
        count: 5

    },

    {

        name: 'Python',
        count: 7

    },

]

let categoriesJSON = JSON.stringify(categories, ['count', 'name'], 4);
console.log(categoriesJSON);

//json dan objeye çevirme parse ediyoruz
let categoriesObj = JSON.parse(categoriesJSON);
console.log(categoriesObj);





