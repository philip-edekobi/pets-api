import { readFile } from "fs/promises";
import path from "path";

export default async function makeDb() {
    const json = await readFile(path.join(__dirname, "pets.json"), "utf-8");
    const db = JSON.parse(json);
    console.log(db);
    return db;
}
