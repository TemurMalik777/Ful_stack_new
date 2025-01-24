// function kattaKichik(a1, a2, a3) {
//     let engKatta = Math.max(a1, a2, a3);
//     let engKichik = Math.min(a1, a2, a3);
//     return `Eng katta son: ${engKatta}, eng kichik son: ${engKichik}`;
// }

// let a1 = +prompt("Birinchi son:");
// let a2 = +prompt("Ikkinchi son:");
// let a3 = +prompt("Uchinchi son:");

// let natija = kattaKichik(a1, a2, a3);
// alert(natija);

//######################################################################

// berilgan sonni manfiy juf va manfiy toq yoki musbat juft va toqlikga tekshiring

// let son1 = +prompt("Sonni kiriting: ");

// if (son1 > 0 && son1 % 2 == 0) {
//     console.log("Manfiy jut", son1);
// } else if (son1 > 0 && son1 % 2 != 0) {
//     console.log("Manfiy toq");
// }

//############################################################################
//fibonachi

// function fibnachi(n) {
//     let sum = 0;
//     let son2 = 1;
//     let summa_j = 0;
//     for (let i = 0; i < n; i++) {
//         console.log(sum);
//         summa_j += sum;
//         let next = sum + son2;
//         sum = son2;
//         son2 = next;
//     }
//     return summa_j;
// }
// let result = fibnachi(10);
// console.log("N=", result);
