// function fnTakror(arry, array2) {
//     arry.push(...array2);
//     let uniqueNumbers = [...new Set(arry)];
//     console.log(uniqueNumbers);
// }

// let arry = [1, 2, 3];
// let arry2 = [100, 2, 1, 10];

// fnTakror(arry, arry2);

// console.log(arry);

//#############################################

// function almashArray(arr) {
//     return arr.reduce(
//         (acc, val) =>
//             Array.isArray(val) ? acc.concat(almashArray(val)) : acc.concat(val),
//         []
//     );
// }

// function difference(arr1, arr2) {
//     let combined = [...arr1, ...arr2];

//     let uniqueElements = [...new Set(almashArray(combined))];

//     return uniqueElements;
// }

// console.log(difference([1, 2, 3], [100, 2, 1, 10]));

// console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5, 6]]));

//######################################################

// function findUnique(array) {
//     return Array.from(new Set(array));
// }

// let array1 = [1, 2, 2, 3, 4, 4, 5];
// let array2 = [1, 2, 3, 4, 5];
// let array3 = [1, -2, -2, 3, 4, -5, -6, -5];

// console.log(findUnique(array1));
// console.log(findUnique(array2));
// console.log(findUnique(array3));

//#################################################

// function sortWords(text) {
//     let wordsArray = text.split(" ");
//     wordsArray.sort((a, b) => b.length - a.length);
//     return wordsArray.join(" ");
// }

// let inputText =
//     "Berilgan matn ichidagi barcha so'zlarni uzunligi bo'yicha teskari tartibda tartiblab chiqaring";
// console.log(sortWords(inputText));

//############################################################

// function teskariFn(arry) {
//     let newArry = [];
//     for (let i = arry.length - 1; i >= 0; i--) {
//         newArry.push(arry[i]);
//     }
//     return newArry;
// }

// let inputArry = [1, 2, 3, 4, 5, 6, 9, 8, 7];
// console.log(teskariFn(inputArry));

//####################################################
