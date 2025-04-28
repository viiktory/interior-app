import { axiosClient } from './axiosClient'
import { PATHS } from '../constants/paths'

export async function login(credentials: { email: string }) {
  const response = await axiosClient.post(PATHS.AUTH.login, credentials, {
    withCredentials: true,
  })

  return response.data
}
