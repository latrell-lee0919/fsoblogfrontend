/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'
const baseUrl = '/api/login'

const login = async creds => {
    const response = await axios.post(baseUrl, creds)
    return response.data
}

export default { login }