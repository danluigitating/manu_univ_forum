import api from './api'

export const getAllUsers = () => {
    return api.get("/api/v1/users")
}