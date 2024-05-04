
//closer dış fonksiyon ile iç fonksiyon arasındaki bağlantıyı sağlar
function counter() {
    let count = 0;
    function up() {
        count++;
        return count;
    }

    function down() {
        count--;
        return count;
    }

    return {
        up,
        down
    }
}

let count = counter();

console.log(count.up());

console.log(count.up());

console.log(count.down());

console.log(count.up());

console.log(count.down());