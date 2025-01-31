// const phoneBook = new Map();

// function addUser(name) {
//     if (!phoneBook.has(name)) {
//         phoneBook.set(name, new Map());
//     }
// }

// function addPhoneNumber(name, label, number) {
//     if (phoneBook.has(name)) {
//         phoneBook.get(name).set(label, number);
//     } else {
//         console.log(`${name} ro'yxatda yo'q!`);
//     }
// }

// function updatePhoneNumber(name, label, newNumber) {
//     if (phoneBook.has(name) && phoneBook.get(name).has(label)) {
//         phoneBook.get(name).set(label, newNumber);
//     } else {
//         console.log(`${name} ning "${label}" raqami topilmadi!`);
//     }
// }

// function deletePhoneNumber(name, label) {
//     if (phoneBook.has(name) && phoneBook.get(name).has(label)) {
//         phoneBook.get(name).delete(label);
//     } else {
//         console.log(`${name} ning "${label}" raqami topilmadi!`);
//     }
// }

// function getUserPhones(name) {
//     if (phoneBook.has(name)) {
//         console.log(`${name} ning telefon raqamlari:`);
//         phoneBook.get(name).forEach((number, label) => {
//             console.log(`${label}: ${number}`);
//         });
//     } else {
//         console.log(`${name} ro'yxatda yo'q!`);
//     }
// }

// addUser("Temur");
// addPhoneNumber("Temur", "mobil", "+998901234567");
// addPhoneNumber("Temur", "ish", "+998931234567");

// addUser("Ali");
// addPhoneNumber("Ali", "mobil", "+998991112233");

// getUserPhones("Temur");

// updatePhoneNumber("Temur", "mobil", "+998901112233");
// getUserPhones("Temur");

// deletePhoneNumber("Temur", "ish");
// getUserPhones("Temur");

//#######################################################

function processLogs(logs) {
    const userStats = new Map();

    logs.forEach((log) => {
        let [user, ip, duration] = log.split(" ");
        duration = parseInt(duration, 10);

        if (!userStats.has(user)) {
            userStats.set(user, { totalDuration: 0, ipSet: new Set() });
        }

        let userData = userStats.get(user);
        userData.totalDuration += duration;
        userData.ipSet.add(ip);
    });

    userStats.forEach((data, user) => {
        let sortedIps = [...data.ipSet].sort();
        console.log(`${user} ${data.totalDuration} [${sortedIps.join(", ")}]`);
    });
}

const logs = [
    "Alice 192.168.0.1 10",
    "Bob 192.168.0.2 5",
    "Alice 192.168.0.1 5",
    "Alice 192.168.0.3 8",
    "Bob 192.168.0.2 7",
    "Alice 192.168.0.2 3",
];

processLogs(logs);
