import { readFileSync } from "fs";
import path from "path";

export default function makeDb() {
    const json = readFileSync(path.join(__dirname, "pets.json"), "utf-8");
    const db = JSON.parse(json);
    return db;
}
