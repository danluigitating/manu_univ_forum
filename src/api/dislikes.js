import api from "./api";

export const incrementDislikes = (postId) => {
    return api.post("/api/v1/dislike", postId)
}