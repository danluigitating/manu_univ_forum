import api from "./api";

export const incrementDislikes = (data) => {
    return api.post("/api/v1/dislike", data)
}