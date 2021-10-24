import api from './api'

export const getAllComments = () => {
    return api.get("/api/v1/comments")
}