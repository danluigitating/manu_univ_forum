import api from './api'

export const getAllPosts = () => {
    return api.get("/api/v1/posts")
}

export const createNewPost = (post) => {
    return api.post("/api/v1/post", post)
}