import { Request } from "../types/index";

export default function adaptRequest(req: any): Request {
    const { path, params, query, body, method } = req;

    return Object.freeze({
        path,
        params,
        body,
        method,
        query,
    });
}
