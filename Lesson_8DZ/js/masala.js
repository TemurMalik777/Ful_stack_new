// function years(ota, ogil) {
//     if (ota < ogil) {
//         return "Otaning yoshi farzandni yoshidan katta bo'lishi kerak";
//     }
//     const farq = ota - 2 * ogil;

//     if (farq === 0) {
//         return "Hzori otanign yoshi farzandni yoshidan 2 marta katta ";
//     } else if (farq > 0) {
//         return `${farq} yil avval otaning yoshi farzandining yoshidan ikki barobar katta edi.`;
//     } else {
//         return `${-farq} yildan keyin otaning yoshi farzandining yoshidan ikki barobar katta bo'ladi.`;
//     }
// }

// let input_ota = +prompt("Otani yoshini kiriting");
// let input_ogil = +prompt("O'g'ilni yoshini kiriting");

// console.log(years(input_ota, input_ogil));

//##################################################################################################

// function findFactors(num) {
//     if (num <= 0) return "Son musbat bo'lishi kerak.";
//     let result = "";
//     for (let i = 1; i <= num; i++) {
//         if (num % i === 0) {
//             result += i + " ";
//         }
//     }
//     return result.trim();
// }

// let input = +prompt("Sonni kiriting");
// console.log(findFactors(input));

//#########################################################################

// function isPrime(num) {
//     if (num <= 1) return false;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) return "Tub son emas";
//     }
//     return "Bu tub son";
// }

// let input = +prompt("Sonni kiritng");
// console.log(isPrime(input));

//#####################################################################

function power(base, exponent) {
    if (exponent === 0) return 1;
    if (exponent < 0) return 1 / power(base, -exponent);
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
}

let input = +prompt("Sonni kiriting: ");
let daraja = +prompt("Darajani kiriting:");
console.log(power(input, daraja));
