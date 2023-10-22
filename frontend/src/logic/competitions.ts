import { backendRequest } from "./request";

export const getAllCompetitions = async () => {
    const response = await backendRequest("competitions")
    return await response.json();
};