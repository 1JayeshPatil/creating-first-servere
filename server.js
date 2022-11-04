const http = require("http");

const port = 8081; // local port no

const toDoList = ["Complete Node Byte", "Play Cricket"];

http
    .createServer((req, res) => {
        const { method, url } = req;            // callback function

        if (url === "/todos") {
            if (method === "GET") {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.write(toDoList.toString());
            } else if (method === 'POST') {
                let body = '';
                req.on('error', (err) => {
                    console.error(err)
                }).on('data', (chunk) => {
                    body += chunk;
                    console.log(chunk);
                }).on("end", () => {
                    body = JSON.parse(body);
                    console.log("data: ", body);
                })
            } else {
                res.writeHead(501);
            }
        } else {
            res.writeHead(404);
        }

        res.end();
    })
    .listen(port, () => {                         //callback function
        console.log(`Nodejs server started on port ${port}`);
    });

// http://localhost:8081
