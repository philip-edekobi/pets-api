import { adaptRequest } from "#root/utils";
import handlePetRequest from "..";

export default async function petController(req: any, res: any) {
    try {
        const request = adaptRequest(req);

        const { headers, statusCode, data } = await handlePetRequest(request);

        res.set(headers).status(statusCode).send(data);
    } catch (err) {
        res.status(500).end();
    }
}
