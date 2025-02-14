const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "fileToRead.txt");

function myDevlop(callback) {
    fs.writeFile(filePath, "Bu test fayli", function (error) {
        if (error) {
            console.log(error);
            return;
        }
        console.log("fileToRead.txt yaratildi");
        callback();
    });
}

function readFile() {
    fs.readFile(filePath, "utf-8", function (error, fileToRead) {
        if (error) {
            console.log("Xatolik:", error);
        } else {
            console.log("Fayl ichidagi ma'lumot:", fileToRead);
        }
    });
}

myDevlop(readFile);
