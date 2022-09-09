export default function makeHttpError({
    statusCode,
    errorMessage,
}: {
    statusCode: number;
    errorMessage: string;
}) {
    return {
        headers: {
            "Content-Type": "application/json",
        },
        statusCode,
        data: JSON.stringify({
            success: false,
            errorMessage,
        }),
    };
}
