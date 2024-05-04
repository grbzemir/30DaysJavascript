console.log(new Date().toLocaleTimeString());


for (let i = 1; i <= 10; i++) {

    console.log(i);
}


const person = {

    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    country: 'US',
    city: 'California',
    skills: ['HTML', 'CSS', 'JavaScript'],
    isMarried: false,
}

for (const key in person) {
    console.log(key, person[key]);
}

