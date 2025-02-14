const fs = require("fs");
const path = require("path");

function listFiles() {
    const folderPath = path.join(__dirname, "files");

    if (!fs.existsSync(folderPath)) {
        throw new Error("FS operation failed");
    }

    fs.readdir(folderPath, (err, files) => {
        if (err) {
            throw new Error("FS operation failed");
        }
        console.log("Fayllar ro'yxati:", files);
    });
}

listFiles();
