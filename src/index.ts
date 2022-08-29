import express, { Request, Response } from "express";

import * as https from "https"
import * as http from "http"
const fs = require("fs");
const config = require("./config.json");

const port = 8000;
// const { route } = require("./router.js");
const app = express();

// server.use(route);
app.get("/", function(req: Request, res: Response){
    res.json({ response: 200 });
});

let server;
if(config.ssl) {
    server = https.createServer({
        cert: fs.readFileSync('./certificates/cert.pem'),
        key: fs.readFileSync('./certificates/key.pem')
    }, app);
} else {
    server = http.createServer(app);
};

server.listen(port, () => console.log(`Browse: https://localhost:${port}/`));