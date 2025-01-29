// function truncate(str, maxlength) {
//     if (str.length > maxlength) {
//         return str.substring(0, maxlength) + "...";
//     } else {
//         return str;
//     }
// }

// console.log(truncate("Salom dunyo", 7)); // "Salom d..."

//##############################################################3

// function select(s1, s2) {
//     let result = "";
//     for (let char of s1) {
//         if (!s2.includes(char)) {
//             result += char;
//         }
//     }
//     for (let char of s2) {
//         if (!s1.includes(char)) {
//             result += char;
//         }
//     }
//     return result;
// }

// console.log(select("Salom", "Kalom"));

//####################################################

const countChars = (str) => {
    const counts = {};
    for (let char of str.replace(/\s/g, "")) {
        counts[char] = (counts[char] || 0) + 1;
    }
    let result = "";
    for (let char in counts) {
        result += `${char}${"*".repeat(counts[char])}, `;
    }
    return result.slice(0, -2);
};

console.log(countChars("NAJOT TA’LIM"));
