import api from './api'

export const getRandomName = () => {
    return api.get("/randomName")
}