// const product = {
//     nomi: "meat",
//     miqdori: 15,
//     narxi: 125000,
//     productInfo() {
//         console.log(
//             `nomi: ${this.nomi}, miqdori: ${this.miqdori}, narxi: ${this.narxi}`
//         );
//     },
//     setPrice: function (newPrice) {
//         this.narxi = newPrice;
//     },
// };
// product.productInfo();
// product.setPrice();

// let tovar = { ...product };
// tovar.setPrice(11999);
// console.log("Product ma'lumot:");
// product.productInfo();
// console.log("Tovar ma'lumot:");
// tovar.productInfo();

//#########################################

// let radius = parseFloat(prompt("Doiraning radiusini kiriting:"));

// const doira = {
//     radius: radius,
//     doiraYuzasi: function () {
//         const PI = 3.14;
//         let yuza = PI * (this.radius * this.radius);
//         return yuza;
//     },
// };

// let yuza = doira.doiraYuzasi();
// console.log(`Doiraning yuzi: ${yuza}`);

//##########################################################

function InvertKeyValue(obj) {
    let newObj = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[obj[key]] = key;
        }
    }
    return newObj;
}

let original = { red: "qizil", green: "yashil" };
let inverted = InvertKeyValue(original);

console.log(inverted);
