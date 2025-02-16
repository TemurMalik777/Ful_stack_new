const http = require("node:http");
const dotenv = require("dotenv");
dotenv.config();
const fs = require("node:fs");
const path = require("node:path");

const PORT = process.env.PORT || 3030;
const HOST = process.env.HOST || "127.0.0.1";

const createViewPage = (page) =>
    path.resolve(__dirname, "view", `${page}.html`);

const server = http.createServer((req, res) => {
    let filePath;

    switch (req.url) {
        case "/":
            filePath = createViewPage("index");
            break;
        case "/adabiyotlar":
            filePath = createViewPage("adabiyotlar");
            break;
        case "/maqolalar":
            filePath = createViewPage("maqolalar");
            break;
        case "/dissertatsiyalar":
            filePath = createViewPage("dissertatsiyalar");
            break;
        case "/monografiyalar":
            filePath = createViewPage("monografiyalar");
            break;
        case "/muassasalar":
            filePath = createViewPage("muassasalar");
            break;
        case "/mualliflar":
            filePath = createViewPage("mualliflar");
            break;
        case "/jurnallar":
            filePath = createViewPage("jurnallar");
            break;
        default:
            filePath = createViewPage("error");
            res.statusCode = 404;
            break;
    }

    res.setHeader("Content-Type", "text/html");

    fs.readFile(filePath, (err, page) => {
        if (err) {
            console.error("Serverda xatolik:", err);
            res.statusCode = 500;
            res.end("Serverda xatolik - 500");
        } else {
            res.end(page);
        }
    });
});

server.listen(PORT, HOST, (error) => {
    if (error) {
        console.log("Serverda xatolik:", error);
    } else {
        console.log(
            `Server ${PORT}-portda ishga tushdi: http://${HOST}:${PORT}`
        );
    }
});
