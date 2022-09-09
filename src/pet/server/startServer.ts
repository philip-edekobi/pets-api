import express from "express";
import http from "http";
import routes from "./routes";

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());

app.use(express.urlencoded());

app.use(routes);

const server = http.createServer(app);

export default function startServer() {
    return server.listen(PORT, () => {
        console.log(`server active on port: ${PORT}`);
    });
}
