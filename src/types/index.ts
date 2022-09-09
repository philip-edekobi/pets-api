export type Request = {
    path: string;
    params: any;
    body: any;
    method: string;
    query: any;
};

export type Response = {
    headers: object;
    statusCode: number;
    data: string;
};

export type Pet = {
    id: number;
    name: string;
    type: string;
    owner: string;
    age: number;
    eyeColor: string;
};
