const fs = require("fs");

const writeNumbers = (filename = "sonlar.txt") => {
    const numbers = Array.from(
        { length: 100 },
        () => Math.floor(Math.random() * 1000) + 1
    );
    fs.writeFileSync(filename, numbers.join("\n"), "utf-8");
};

const readNumbers = (filename = "sonlar.txt") => {
    return fs
        .readFileSync(filename, "utf-8")
        .split("\n")
        .filter((line) => line.trim() !== "")
        .map(Number);
};

writeNumbers();
const numbers = readNumbers();
console.log(numbers);
