import { Request, Response } from "../types/index";
import { makeHttpError } from "../utils/index";

export default function endpoints({ dataModel }: { dataModel: any }) {
    return async function handle(httpRequest: Request) {
        switch (httpRequest.method) {
            case "GET": {
                return getAllPets();
            }

            default: {
                return makeHttpError({
                    statusCode: 405,
                    errorMessage: `${httpRequest.method} method not allowed`,
                });
            }
        }
    };

    function getAllPets(): Response {
        const pets = dataModel.getAll();

        return {
            headers: {
                "Content-type": "application/json",
            },
            statusCode: 200,
            data: pets,
        };
    }
}
