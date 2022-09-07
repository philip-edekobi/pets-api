export default function adaptRequest(req: any) {
    const { path, params, query, body, method } = req;

    return Object.freeze({
        path,
        params,
        body,
        method,
        query,
    });
}
