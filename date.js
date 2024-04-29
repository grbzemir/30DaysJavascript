
const date = new Date()

let year = date.getFullYear(),
    month = date.getMonth(),
    day = date.getDate(),
    hours = date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds()
dayNumber = date.getDay()

// 29 nisan 2021 22:32:10


let months =
    [
        'Ocak',
        'Şubat',
        'Mart',
        'Nisan',
        'Mayis',
        'Haziran',
        'Temmuz',
        'Ağustos',
        'Eylül',
        'Ekim',
        'Kasim',
        'Aralik'


    ]

let days = [


    'Pazartesi',
    'Sali',
    'Çarşamba',
    'Perşembe',
    'Cuma',
    'Cumartesi',
    'Pazar'

]

console.log(`${day} ${months[month]} ${year}, ${days[dayNumber]}, ${hours}:${minutes}:${seconds}`)