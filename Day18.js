//callback bir fonksiyonun çalışması tamamlandıktan sonra farklı bir fonksiyonun calısmasını sağlar

const test = callback => {

    setTimeout(() => {
        callback('Hata Olustu!', [])
    }, 2000);

}

const callback = (err, data) => {
    if (err) {
        console.log('hata', err)

    }

    else {
        console.log('data', data)
    }
}

// test(callback);


const promise = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve('işlem tamamlandi'); //Başarılı durumlar
        reject('işlem tamamlanamadi');// Başarısız durumlar
    }, 2000);
    // resolve('işlem tamamlandi'); //Başarılı durumlar
    // reject('işlem tamamlanamadi');// Başarısız durumlar
})

promise.then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
}
)

console.log(promise)


const API_URL = 'https://jsonplaceholder.typicode.com/posts';

// fetch(API_URL)
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

async function getPosts() {

    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        console.log(data);
    }

    catch (err) {
        console.log(err)
    }

}

