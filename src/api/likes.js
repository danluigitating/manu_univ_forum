import api from "./api";

export const incrementLikes = (postId) => {
    return api.post("/api/v1/like", postId)
}