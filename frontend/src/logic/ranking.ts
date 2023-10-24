import { backendRequest } from "./request"

export const getRanking = async () => {
    const response = await backendRequest("ranking");
    return await response.json();
}