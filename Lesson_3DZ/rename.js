const fs = require("fs");
const path = require("path");

function myDevlop(callback) {
    const filePath = path.join(__dirname, "wrongFilename.txt");
    fs.writeFile(filePath, "", function (error) {
        if (error) {
            console.log(error);
            return;
        }
        console.log("wrongFilename.txt nomli fayl yaratildi");
        setTimeout(callback, 3000);
    });
}

function renameFile() {
    const oldFilename = path.join(__dirname, "wrongFilename.txt");
    const newFilename = path.join(__dirname, "properFilename.md");

    fs.rename(oldFilename, newFilename, (err) => {
        if (err) {
            if (err.code === "ENOENT") {
                console.error(
                    "FS operation failed: wrongFilename.txt fayli mavjud emas"
                );
            } else if (err.code === "EEXIST") {
                console.error(
                    "FS operation failed: properFilename.md allaqachon mavjud"
                );
            } else {
                console.error("FS operation failed");
            }
        } else {
            console.log(
                `Fayl nomi o'zgartirildi: ${oldFilename} -> ${newFilename}`
            );
        }
    });
}

myDevlop(renameFile);
