const WebSocket = require("ws");

const server = new WebSocket.Server({ port: 3000 }, () => {
    console.log("CHAT server 3000-portda ishga tushdi");
});

let userId = 1;
server.on("connection", (ws) => {
    ws.on("message", (message) => {
        const data = JSON.parse(message);
        if (data.type === "nickname") {
            ws.id = userId++;
            ws.nickname = data.nickname;
            ws.send(
                JSON.stringify({
                    nickname: "Server",
                    message: `Xush kelibsiz, ${ws.nickname}!`,
                })
            );
        } else if (data.type === "message") {
            server.clients.forEach((client) => {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(
                        JSON.stringify({
                            nickname: ws.nickname,
                            message: data.message,
                        })
                    );
                }
            });
        }
    });
});
