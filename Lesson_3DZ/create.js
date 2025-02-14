const fs = require("fs");
const path = "./files/fresh.txt";

fs.access(path, fs.constants.F_OK, (err) => {
    if (!err) {
        throw new Error("FS operation failed");
    } else {
        fs.writeFile(path, "I am fresh and young", (error) => {
            if (error) {
                console.log(error);
            } else {
                console.log("File successfully created!");
            }
        });
    }
});

if (!fs.existsSync("./files")) {
    fs.mkdir("./files", (err) => {
        if (err) {
            console.log(err);
        }
    });
}
//##################################################################
// const fs = require("fs");
// const path = require("path");

// function newFile() {
//     const dirPath = path.join(__dirname, "file");
//     const newFilePath = path.join(dirPath, "fresh.txt");

//     if (!fs.existsSync(dirPath)) {
//         fs.mkdirSync(dirPath, { recursive: true });
//         console.log("file papkasi yaratildi");
//     }

//     fs.writeFile(newFilePath, "", function (err) {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log("fresh.txt fayli yaratildi");
//         }
//     });
// }

// newFile();
