import { Request } from "#root/types/index";

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
