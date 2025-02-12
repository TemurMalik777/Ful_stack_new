// const urlData = {
//     protocol: "https",
//     hostname: "mywebsite.com",
//     query: {
//         id: 45,
//         author: "Ali",
//         lang: "en",
//     },
// };

// urlData.query.lang = "uz";
// urlData.query.wiev = "mobile";

// const queryString = new URLSearchParams(urlData.query).toString();
// const newUrl = `${urlData.protocol}://${urlData.hostname}${urlData.path}?${queryString}`;

// console.log(newUrl);

//####################################################3

// const os = require("node:os");

// console.log(Object.keys(os));

// console.log("cpus:", os.cpus());

//#################################################################
// // console.log(__dirname);

// const { Resolver } = require("dns");
// const path = require("path");

// const path = require("path")

// const rootFolder = "/home/uers/"
// const subFolder = "projects/myapp/";
// const faylNomi = "server.js"

// const fullPath = path.join(rootFolder,subFolder,faylNomi)
// console.log(fullPath);

//####################################################

// const path = require("path");

// const paths = [
//     "C://Users//Admin//Desktop//project//..//index.js",
//     "/home/user/docs/../images/photo.png",
//     "./folder/subfolder/../../script.js",
// ];

// const normalizedPaths = paths.map((p) => path.normalize(p));

// console.log("Normalize qilingan yo'llar:");

// normalizedPaths.forEach((np, i) => {
//     if (i === 0) {
//         console.log(
//             `${np} - index.js fayli Desktop (asosiy katalog) papkasida`
//         );
//     } else if (i === 1) {
//         console.log(`${np} - photo.png fayli 'images' papkasida`);
//     } else if (i === 2) {
//         console.log(`${np} - script.js fayli joriy ishchi papkada`);
//     }
// });

//#################################################

const path = require("path");

const files = [
    "report.docx",
    "notes.txt",
    "data.json",
    "README.md",
    "script.js",
    "todo.txt",
];

const filteredFiles = files.filter((file) => {
    const ext = path.extname(file);
    return ext === ".txt" || ext === ".md";
});

console.log(filteredFiles);
