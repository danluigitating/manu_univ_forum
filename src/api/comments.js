import api from './api'

export const getAllComments = () => {
    return api.get("/api/v1/comments")
}

export const createNewComment = (post) => {
    return api.post("/api/v1/comment", post)
}