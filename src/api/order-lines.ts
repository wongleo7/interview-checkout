import axiosClient from './axios-client'
import { OrderLine } from '../models/OrderLine'
import { Problems } from '..'

async function getOrderLines(problems: Problems): Promise<OrderLine[]> {
  const response = await axiosClient.get<OrderLine[]>(`/order-lines/${problems}`)
  return response.data
}

export default getOrderLines
