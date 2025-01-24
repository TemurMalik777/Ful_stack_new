// function fn(a, b) {
//     return a + b;
// }
// let count = 1;

// while (count < 2) {
//     let input1 = +prompt("Ikkita sonni kiriting: Birinchi son");
//     let input2 = +prompt("Ikkinchi sonni");
//     console.log(fn(input1, input2));
//     count++;
// }

//##########################################################################

// function ikkiSon(a, b) {
//     if (a % b === 0) {
//         return "Bolinadi";
//     } else {
//         return "Bolinmaydi";
//     }
// }

// let count = 1;
// while (count < 2) {
//     let son1 = +prompt("Birinchi son");
//     let son2 = +prompt("Ikkinchi son");
//     console.log(ikkiSon(son1, son2));
//     count++;
// }

//###############################################################3
// Foydalanuvchidan ikkita son va amal (+, -, *, /) tanlashi so'rang. Tanlangan amalga qarab natijani chiqaring.

// let num1 = +prompt("Birinchi son:");
// let num2 = +prompt("Ikkinchi son:");
// let operator = prompt("Ishorani kiriting(+,-,*,/)");

// switch (operator) {
//     case "+":
//         console.log(`${num1} + ${num2} = ${num1 + num2}`);
//         break;
//     case "-":
//         console.log(`${num1} - ${num2} = ${num1 - num2}`);
//         break;
//     case "*":
//         console.log(`${num1} * ${num2} = ${num1 * num2}`);
//         break;
//     case "/":
//         if (num2 !== 0) {
//             console.log(`${num1} / ${num2} = ${num1 / num2}`);
//         } else {
//             console.log("Bo'lishda nolga bo'lish mumkin emas!");
//         }
//         break;
//     default:
//         console.log("Notog'ri amal!");
// }

//############################################################################

// function trailingZeros(n) {
//     let factorial = 1;
//     for (let i = 1; i <= n; i++) {
//         factorial *= i;
//     }
//     console.log("Faktorial:", factorial);
// }

// let input = +prompt("input = ");
// trailingZeros(input);
