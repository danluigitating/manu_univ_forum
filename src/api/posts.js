import api from './api'

export const getAllPosts = () => {
    return api.get("/api/v1/posts")
}