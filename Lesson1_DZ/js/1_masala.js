// class Avto {
//     constructor(marka, model, year) {
//         this.marka = marka;
//         this.model = model;
//         this.year = year;
//     }
// }

// class YengilAvto extends Avto {}
// class YukAvto extends Avto {}

// class Garaj {
//     constructor(joylarSoni) {
//         this.joylarSoni = joylarSoni;
//         this.avtolar = [];
//     }

//     joyla(yangiAvto) {
//         if (!(yangiAvto instanceof Avto)) {
//             return "Faqat Avtolar qoshish mumkin";
//         }
//         if (this.avtolar.length >= this.joylarSoni) {
//             return "Uzr joy toldi.";
//         }
//         this.avtolar.push(yangiAvto);
//         return "Avto qoshildi!";
//     }
// }

// let garage = new Garaj(2);
// console.log(garage.avtolar);
// console.log(garage.joyla(new YengilAvto("Hyundai", "Elantra", 2019)));
// console.log(garage.avtolar);
// console.log(garage.joyla("Moto"));
// console.log(garage.joyla(new YukAvto("Kamaz", "Kamaz77", 2000)));
// console.log(garage.avtolar);
// console.log(garage.joyla(new YengilAvto("GM", "Nexia", 2018)));

//####################################################################################

// function odamSoni(twoDmas) {
//     let sumKey = 0;
//     let sumValue = 0;
//     for (const [key, value] of twoDmas) {
//         sumKey += key;
//         sumValue += value;
//     }
//     console.log(sumKey - sumValue);
// }

// // let data = [
// //     [10, 0],
// //     [3, 5],
// //     [5, 8],
// // ];

// let data = [
//     [3, 0],
//     [9, 1],
//     [4, 8],
//     [12, 2],
//     [6, 1],
//     [7, 8],
// ];
// odamSoni(data);
