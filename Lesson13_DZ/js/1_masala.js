// function calculateWorkingHours(startTime, endTime) {
//     const [startHour, startMinute] = startTime.split(":").map(Number);
//     const [endHour, endMinute] = endTime.split(":").map(Number);

//     const startTotalMinutes = startHour * 60 + startMinute;
//     const endTotalMinutes = endHour * 60 + endMinute;

//     if (endTotalMinutes < startTotalMinutes) {
//         return "Xato: tugash vaqti boshlanish vaqtidan oldin bo'lishi mumkin emas";
//     }

//     const workingMinutes = endTotalMinutes - startTotalMinutes;

//     const hours = Math.floor(workingMinutes / 60);
//     const minutes = workingMinutes % 60;

//     return `Ish vaqti: ${hours} soat ${minutes} daqiqa`;
// }

// console.log(calculateWorkingHours("09:00", "17:30"));
// console.log(calculateWorkingHours("10:00", "09:00"));

//########################################################################

// function calculateBankWorkingDay(bankWorkingDay, year = 2023) {
//     let currentDate = new Date(year, 0, 1);
//     let workingDaysCount = 0;

//     while (true) {
//         const dayOfWeek = currentDate.getDay();
//         if (dayOfWeek !== 0 && dayOfWeek !== 6) {
//             workingDaysCount++;
//             if (workingDaysCount === bankWorkingDay) {
//                 const monthNames = [
//                     "Yanvar",
//                     "Fevral",
//                     "Mart",
//                     "Aprel",
//                     "May",
//                     "Iyun",
//                     "Iyul",
//                     "Avgust",
//                     "Sentabr",
//                     "Oktabr",
//                     "Noyabr",
//                     "Dekabr",
//                 ];
//                 const month = monthNames[currentDate.getMonth()];
//                 const day = currentDate.getDate();
//                 return `Natija: ${month} oy, ${day}-sana`;
//             }
//         }
//         currentDate.setDate(currentDate.getDate() + 1);
//     }
// }

// let bankDay = +prompt("Bank ish kunini kiriting (masalan, 60):");
// console.log(calculateBankWorkingDay(bankDay));

//###################################################################33

const jsonData1 = {
    user: {
        name: "Ali",
        age: 25,
        address: {
            city: "Tashkent",
            zip: "100000",
        },
    },
    active: true,
};

const jsonData2 = {
    user: {
        name: "Ali",
        age: 30,
        address: {
            city: "Tashkent",
            zip: "200000",
        },
    },
    active: true,
};

function findCommonPairs(obj1, obj2) {
    let common = {};

    for (let key in obj1) {
        if (obj1.hasOwnProperty(key) && obj2.hasOwnProperty(key)) {
            const val1 = obj1[key];
            const val2 = obj2[key];

            if (
                typeof val1 === "object" &&
                val1 !== null &&
                typeof val2 === "object" &&
                val2 !== null
            ) {
                const nestedCommon = findCommonPairs(val1, val2);
                if (Object.keys(nestedCommon).length > 0) {
                    common[key] = nestedCommon;
                }
            } else {
                if (val1 === val2) {
                    common[key] = val1;
                }
            }
        }
    }

    return common;
}

console.log(findCommonPairs(jsonData1, jsonData2));
