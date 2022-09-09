import { Request, Response } from "#root/types/index";
import { makeHttpError } from "#root/utils/index";

export default function endpoints({ dataModel }: { dataModel: any }) {
    return async function handle(httpRequest: Request) {
        switch (httpRequest.method) {
            case "GET": {
                return getAllPets(httpRequest);
            }

            default: {
                return makeHttpError({
                    statusCode: 405,
                    errorMessage: `${httpRequest.method} method not allowed`,
                });
            }
        }
    };

    async function getAllPets(req: Request): Promise<Response> {
        return dataModel.getAll();
    }
}
