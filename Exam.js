
let sonuc = parseInt(prompt("Sinavdan kaç aldin?", ""));

if (sonuc >= 100) {

    alert("Max 100 Girebilirsiniz");

}

else if (sonuc >= 100) {

    alert("AA")
}

else if (sonuc >= 90) {

    alert("BA")
}

else if (sonuc >= 80) {

    alert("BB")
}


else if (sonuc >= 70) {

    alert("CB")
}

else if (sonuc >= 60) {

    alert("CC")
}


else if (sonuc >= 50) {

    alert("DD")
}


else if (sonuc <= 49) {

    alert("FF")
}


else {
    alert("Geçersiz");
}


let sonbahar = "Eylül , Ekim , Kasim"

let a = prompt("Istediğiniz ayi girin mevsimini söyleyelim")

if (sonbahar.includes(a)) {
    alert("Sonbahar")
}