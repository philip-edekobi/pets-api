import express from "express";
import http from "http";

const PORT = process.env.PORT || 5000;

const app = express();

const server = http.createServer(app);

export default function startServer() {
    return server.listen(PORT, () => {
        console.log(`server active on port: ${PORT}`);
    });
}
