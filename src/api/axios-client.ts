import axios from 'axios'

const axiosClient = axios.create({
  baseURL: `https://archoninterviewssoftwaredeveloper.azurewebsites.net/api`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default axiosClient
