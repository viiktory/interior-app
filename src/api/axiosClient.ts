import axios from 'axios'
import { handleAxiosError } from './errorHandler.ts'

function createAxiosClient(baseURL: string) {
  if (!baseURL) {
    throw new Error('baseURL must be a baseURL')
  }

  const client = axios.create({ baseURL })

  client.interceptors.response.use(
    (response) => response,
    (error) => {
      handleAxiosError(error)

      return Promise.reject(error)
    },
  )

  return client
}

export const axiosClient = createAxiosClient(import.meta.env.VITE_API_URL)
