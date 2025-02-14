const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "fileToRemove.txt");

function myDevlop(callback) {
    fs.writeFile(filePath, "", function (error) {
        if (error) {
            console.log(error);
            return;
        }
        console.log("fileToRemove.txt nomli file yaratildi");
        setTimeout(callback, 5000);
    });
}

function removeFile() {
    fs.unlink(filePath, (error) => {
        if (error) {
            console.log("O'chirishda xatolik:", error);
        } else {
            console.log("Uchirildi");
        }
    });
}

myDevlop(removeFile);
