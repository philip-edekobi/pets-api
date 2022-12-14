import express from "express";
import http from "http";
import cors from "cors";
import routes from "./routes";

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());

app.use(express.urlencoded());

app.use(cors());

app.use(routes);

const server = http.createServer(app);

export default async function startServer() {
    server.listen(PORT, () => {
        console.log(`server active on port: ${PORT}`);
    });
}
