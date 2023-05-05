import { OrderCalculationResult } from '../models/OrderCalculationResult'
import { OrderLine } from '../models/OrderLine'

type OrderAccumulator = { [key: string]: OrderCalculationResult }

export function calculateProblem1(orderLines: OrderLine[]): OrderCalculationResult[] {
  const orders = orderLines.reduce((accumulator: OrderAccumulator, currentValue) => {
    const currentId = currentValue.orderId
    const lastOrderTotal = accumulator[currentId]?.total ?? 0

    const newOrder = {
      orderId: currentId,
      total: lastOrderTotal + currentValue.quantity * currentValue.unitPrice
    }

    accumulator[currentId] = newOrder

    return accumulator
  }, {})

  return Object.values(orders)
}
