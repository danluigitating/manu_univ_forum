import api from "./api";

export const incrementLikes = (data) => {
    return api.post("/api/v1/like", data)
}