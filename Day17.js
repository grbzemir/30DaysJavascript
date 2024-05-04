
// localStorage.setItem('name', 'John Doe');

// const names = ['John Doe', 'Jane Doe', 'Alice', 'Bob'];
// const users = {
//     name: 'John Doe',
//     age: 32,
//     email: 'emircangrz121@gmail.com'
// }

// localStorage.setItem('users', JSON.stringify(names));

// console.log(JSON.parse(localStorage.getItem('name')));


const sepet = JSON.parse(localStorage.getItem('sepet')) || [
    {
        productId: 1,
        amount: 2
    }
]

const producst = [
    {
        id: 1,
        name: 'Apple',
        price: 5
    },
    {
        id: 2,
        name: 'Huawei Laptop',
        price: 3
    },
    {
        id: 3,
        name: 'Samsung Galaxy ZFlip 3',
        price: 4
    }

]

function saveToStorage() {
    localStorage.setItem('sepet', JSON.stringify(sepet));
}

function addSepet(productId) {

    const sepetItem = sepet.find(b => b.productId === productId);

    console.log(sepetIndex);
    if (sepetIndex > -1) {
        sepet[sepetIndex] = {
            ...sepet[sepetIndex],
            amount: sepet[sepetIndex].amount + 1
        }
    }
    sepet.push(productId);
    saveToStorage();


}

function removeSepet(productId) {
    const item = basket.find(p => p.productId === productId);
    if (item.amount === 1) {
        sepet = sepet.filter(p => p.productId !== productId);
    }
    else {
        sepet = sepet.map(i => {
            if (i.productId === productId) {
                return {
                    ...i,
                    amount: i.amount - 1
                }
            }
            return i;

        })
    }

    sepet = sepet.filter(id => id !== productId);
    saveToStorage();
}

function totalPrice() {
    return basket.reduce((prev, sepet) => {
        const product = products.find(p => p.id === sepet.productId);

        return prev += (product.price * sepet.amount);
    }, 0
    )


}

console.log(totalPrice());






