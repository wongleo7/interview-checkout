import { OrderCalculationResult } from '../models/OrderCalculationResult'
import { OrderLine } from '../models/OrderLine'

//TODO: move to env variable or CMS
const PromoDivider = 3

type OrderAccumulator = { [orderId: number]: OrderCalculationResult }
type OrderSummary = { [orderId: number]: { [productId: number]: { [price: number]: number } } }

function getOrderSummary(orderLines: OrderLine[]): OrderSummary {
  const discounts: OrderSummary = {}

  orderLines.forEach((order) => {
    const currOrder = discounts[order.orderId]
    const currProduct = currOrder?.[order.productId] ?? []
    const currUnitsAtPrice = currProduct?.[order.unitPrice] ?? 0

    const orderedProducts = {
      ...currProduct,
      [order.unitPrice]: currUnitsAtPrice + order.quantity
    }

    discounts[order.orderId] = {
      ...discounts[order.orderId],
      [order.productId]: orderedProducts
    }
  })
  return discounts
}

export function calculate(orderLines: OrderLine[]): OrderCalculationResult[] {
  const discounts = getOrderSummary(orderLines)

  const orders = Object.keys(discounts)
    .map((x) => parseInt(x))
    .reduce((accumulator: OrderAccumulator, orderId) => {
      let discountedTotal = 0
      let fullTotal = 0

      Object.keys(discounts[orderId])
        .map((x) => parseInt(x))
        .forEach((productId) => {
          const quantities = discounts[orderId][productId]
          const totalQuantity = Object.values(quantities).reduce((a, b) => a + b, 0)
          const priceList = Object.keys(quantities).map((x) => Number.parseInt(x))
          let totalFree = Math.floor(totalQuantity / PromoDivider)

          //Go through each price + quantity of this productId
          priceList
            .sort((a, b) => a - b)
            .forEach((price) => {
              const quantityAtPrice = quantities[price]
              const discountedQuantity = Math.min(totalFree, quantityAtPrice)
              fullTotal += quantityAtPrice * price
              discountedTotal += (quantityAtPrice - discountedQuantity) * price
              totalFree -= discountedQuantity
            })
        })

      accumulator[orderId] = {
        orderId,
        total: fullTotal,
        buy2Get1FreeTotal: discountedTotal
      }

      return accumulator
    }, {})

  return Object.values(orders)
}
